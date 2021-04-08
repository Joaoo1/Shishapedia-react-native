import { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  ToastAndroid,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/DrawerPageHeader';
import EssenceListItem from '../../components/EssenceListItem';
import api from '../../services/api';

import { colors } from '../../styles';
import styles from './styles';

const Essences = ({ route }) => {
  const [searchString, setSearchString] = useState('');
  const [essences, setEssences] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [allEssences, setAllEssences] = useState({});

  const { brandId, userId } = route.params;

  useEffect(() => {
    async function fetchEssences() {
      try {
        if (userId) {
          const response = await api.get('/favorite_essences');
          setAllEssences(response.data.favorites);
          setEssences(response.data.favorites);
        } else {
          const response = await api.get(`/essences/${brandId}`);
          setAllEssences(response.data);
          setEssences(response.data);
        }
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show(
          'Ocorreu um erro ao carregar essências',
          ToastAndroid.SHORT,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchEssences();
  }, []);

  async function handleSearchEssences() {
    if (searchString === '') {
      setEssences(allEssences);
      return;
    }

    if (userId) {
      // eslint-disable-next-line prettier/prettier
      const filter = (essence) => essence.name.toLowerCase().includes(searchString.toLowerCase());
      const filteredEssences = allEssences.filter(filter);
      setEssences(filteredEssences);
      return;
    }

    try {
      setLoading(true);
      const response = await api.get(`/essences_search/${brandId}`, {
        params: { name: searchString },
      });

      setEssences(response.data);
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show('Erro ao carregar essências', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          animating={isLoading}
          color={colors.accentColor}
        />
      )}

      <PageHeader title="Essências" backButton />
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da essência"
            placeholderTextColor="#c1bccc"
            value={searchString}
            onChangeText={(text) => setSearchString(text)}
            onSubmitEditing={handleSearchEssences}
          />
          <Icon name="search" size={28} color="#c1bccc" style={styles.icon} />
        </View>
        {essences.length === 0 ? (
          <Text style={styles.notFound}>
            {
              // eslint-disable-next-line operator-linebreak
              !isLoading &&
                (userId ? 'Não há favoritos' : 'Nenhuma essência encontrada')
            }
          </Text>
        ) : (
          <FlatList
            data={essences}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <EssenceListItem essence={item} isFirst={index === 0} />
            )}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default Essences;
