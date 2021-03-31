import { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Text,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PageHeader from '../../components/DrawerPageHeader';
import MixListItem from '../../components/MixListItem';
import api from '../../services/api';

import { colors } from '../../styles';
import styles from './styles';

const SearchMixes = () => {
  const [mixes, setMixes] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(
    'Digite para pesquisar um mix',
  );

  async function handleSearchMixes() {
    if (searchString === '') {
      setEmptyMessage('Digite para pesquisar um mix');
      return;
    }

    try {
      setLoading(true);
      const response = await api.get('/mix_search', {
        params: {
          name: searchString,
        },
      });

      if (response.data.mixes && response.data.mixes.length === 0) {
        setEmptyMessage('Nenhum mix encontrado!');
      }

      setMixes(response.data.mixes);
    } catch (err) {
      ToastAndroid.show('Erro ao carregar mixes', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader title="Buscar mixes" backButton />
      <SafeAreaView style={styles.container}>
        <ActivityIndicator
          style={styles.loading}
          size="large"
          animating={isLoading}
          color={colors.accentColor}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da essência"
            placeholderTextColor="#c1bccc"
            onChangeText={(text) => setSearchString(text)}
            onSubmitEditing={handleSearchMixes}
          />
          <Icon
            onPress={handleSearchMixes}
            name="search"
            size={28}
            color="#c1bccc"
            style={styles.icon}
          />
        </View>
        {mixes.length > 0 && (
          <FlatList
            data={mixes}
            style={styles.list}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <MixListItem mix={item} isFirst={index === 0} />
            )}
          />
        )}

        {!isLoading && mixes.length === 0 && (
          <Text style={styles.notFound}>{emptyMessage}</Text>
        )}
      </SafeAreaView>
    </>
  );
};

export default SearchMixes;
