import { useEffect, useState } from 'react';
import { ToastAndroid, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import crashlytics from '@react-native-firebase/crashlytics';

import { colors } from '../../styles';
import PageHeader from '../../components/DrawerPageHeader';
import NarguileItemListItem from '../../components/NarguileItemListItem';

import styles from './styles';
import api from '../../services/api';

const NarguileItems = ({ route }) => {
  const { type } = route.params;
  const [narguileItems, setNarguileItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const { data } = await api.get(`/narguile_items/${type.typeId}`);
        setNarguileItems(data);
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show('Erro ao carregar itens', ToastAndroid.SHORT);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

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

      <PageHeader title={type.name ?? 'Narguiles'} backButton />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={narguileItems}
          keyExtractor={(item) => `${item.typeId}`}
          renderItem={({ item, index }) => (
            <NarguileItemListItem narguile={item} isFirst={index === 0} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default NarguileItems;
