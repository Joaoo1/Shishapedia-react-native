import { useEffect, useState } from 'react';
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
import crashlytics from '@react-native-firebase/crashlytics';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/DrawerPageHeader';
import EssenceBrandListItem from '../../components/EssenceBrandListItem';
import api from '../../services/api';
import { useNotifications } from '../../hooks/notifications';

import { colors } from '../../styles';
import styles from './styles';

const EssencesBrands = ({ navigation }) => {
  const { refreshNotifications } = useNotifications();

  const [brands, setBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useFocusEffect(() => {
    refreshNotifications();
  }, []);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const response = await api.get('/brands/essences');
        setAllBrands(response.data);
        setBrands(response.data);
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show(
          'Ocorreu um erro ao carregar marcas de essência',
          ToastAndroid.SHORT,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchBrands();
  }, []);

  function handleSearchBrands(searchString) {
    if (searchString === '') {
      setBrands(allBrands);
      return;
    }

    // eslint-disable-next-line prettier/prettier
    const filter = (brand) => brand.name.toLowerCase().includes(searchString.toLowerCase());
    const filteredBrands = allBrands.filter(filter);
    setBrands(filteredBrands);
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

      <PageHeader title="Essências" drawerNavigation={navigation} />
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Qual marca você procura?"
            placeholderTextColor="#c1bccc"
            onChangeText={(text) => handleSearchBrands(text)}
          />
          <Icon
            onPress={handleSearchBrands}
            name="search"
            size={28}
            color="#c1bccc"
            style={styles.icon}
          />
        </View>
        {brands.length > 0 && (
          <FlatList
            data={brands}
            style={styles.list}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <EssenceBrandListItem brand={item} isFirst={index === 0} />
            )}
          />
        )}

        {!isLoading && brands.length === 0 && (
          <Text style={styles.notFound}>Nenhuma marca encontrada</Text>
        )}
      </SafeAreaView>
    </>
  );
};

export default EssencesBrands;
