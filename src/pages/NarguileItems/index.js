import { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/DrawerPageHeader';
import NarguileItemListItem from '../../components/NarguileItemListItem';
import api from '../../services/api';
import LoadingIndicator from '../../components/LoadingIndicator';

import Container from './styles';

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
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader title={type.name ?? 'Narguiles'} backButton />
      <Container>
        <FlatList
          data={narguileItems}
          keyExtractor={(item) => `${item.typeId}`}
          renderItem={({ item, index }) => (
            <NarguileItemListItem narguile={item} isFirst={index === 0} />
          )}
        />
      </Container>
    </>
  );
};

export default NarguileItems;
