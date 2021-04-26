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

import api from '../../services/api';
import PageHeader from '../../components/DrawerPageHeader';
import MixListItem from '../../components/MixListItem';

import NotFoundImg from '../../assets/illustrations/not_found.svg';
import styles from './styles';
import { colors } from '../../styles';

const Mixes = ({ route }) => {
  const [mixes, setMixes] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [allMixes, setAllMixes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMixes() {
      try {
        if (route.params.userId) {
          const response = await api.get('/favorite_mixes');
          setMixes(response.data.favorites);
          setAllMixes(response.data.favorites);
        } else {
          const response = await api.get(`/mixes/${route.params.categoryId}`);
          setMixes(response.data.mixes);
          setAllMixes(response.data.mixes);
        }
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show(
          'Ocorreu um erro ao carregar mixes',
          ToastAndroid.SHORT,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchMixes();
  }, []);

  async function handleSearchMixes() {
    if (searchString === '') {
      setMixes(allMixes);
      return;
    }

    try {
      setLoading(true);
      const response = await api.get('/mix_search', {
        params: {
          name: searchString,
          category: route.params.categoryId,
        },
      });

      setMixes(response.data.mixes);
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        ToastAndroid.show(err.response.data.error.ToastAndroid.SHORT);
      }
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

      <PageHeader title="Mixes" backButton />
      <SafeAreaView style={styles.container}>
        {!isLoading && allMixes.length === 0 && (
          <>
            <Text style={styles.noFoundMixesTitle}>Nada por aqui...</Text>

            {route.params.userId ? (
              <Text style={styles.noFoundMixesText}>
                Não há nenhum favorito adicionado
              </Text>
            ) : (
              <Text style={styles.noFoundMixesText}>
                {
                  'Ainda não existe mixes cadastrados nesta categoria. \n Seja o primeiro a indicar um!'
                }
              </Text>
            )}

            <View style={styles.imageContainer}>
              <NotFoundImg />
            </View>
          </>
        )}

        {!isLoading && allMixes.length > 0 && (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite o nome da essência"
                placeholderTextColor="#c1bccc"
                value={searchString}
                onChangeText={(text) => setSearchString(text)}
                onSubmitEditing={handleSearchMixes}
              />
              <Icon
                name="search"
                size={28}
                color="#c1bccc"
                style={styles.icon}
                onPress={handleSearchMixes}
              />
            </View>
            {mixes.length === 0 ? (
              <Text style={styles.noFoundMixesText}>Nenhum mix encontrado</Text>
            ) : (
              <FlatList
                data={mixes}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }) => (
                  <MixListItem mix={item} isFirst={index === 0} />
                )}
              />
            )}
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default Mixes;
