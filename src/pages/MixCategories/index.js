import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import PageHeader from '../../components/DrawerPageHeader';
import MixCategoryListItem from '../../components/MixCategoryListItem';

import styles from './styles';
import { colors } from '../../styles';

const MixCategories = ({ navigation }) => {
  const { navigate } = useNavigation();
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/flavor_categories');
        setCategories(response.data);
      } catch (err) {
        ToastAndroid.show(
          'Ocorreu um erro ao carregar marcas de essência',
          ToastAndroid.SHORT,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <>
      <PageHeader
        title="Mixes"
        drawerNavigation={navigation}
        onClickSearch={() => navigate('SearchMixes')}
      />
      <ActivityIndicator
        style={styles.loading}
        size="large"
        animating={isLoading}
        color={colors.accentColor}
      />
      <SafeAreaView style={styles.container}>
        <Text style={styles.headline}>Categorias</Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <MixCategoryListItem category={item} isFirst={index === 0} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default MixCategories;
