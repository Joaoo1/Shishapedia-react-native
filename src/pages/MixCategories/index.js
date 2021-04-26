import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import crashlytics from '@react-native-firebase/crashlytics';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import PageHeader from '../../components/DrawerPageHeader';
import MixCategoryListItem from '../../components/MixCategoryListItem';
import { useNotifications } from '../../hooks/notifications';

import styles from './styles';
import { colors } from '../../styles';

const MixCategories = ({ navigation }) => {
  const { navigate } = useNavigation();
  const { refreshNotifications } = useNotifications();

  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useFocusEffect(() => {
    refreshNotifications();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/flavor_categories');
        setCategories(response.data);
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

    fetchCategories();
  }, []);

  function handleCreateMixButtonPress() {
    navigate('CreateMix');
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

      <PageHeader
        title="Mixes"
        drawerNavigation={navigation}
        onClickSearch={() => navigate('SearchMixes')}
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

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={handleCreateMixButtonPress}
        >
          <Icon name="add" size={28} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default MixCategories;
