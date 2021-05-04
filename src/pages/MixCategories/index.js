import { useEffect, useState } from 'react';
import { FlatList, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import crashlytics from '@react-native-firebase/crashlytics';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';
import PageHeader from '../../components/DrawerPageHeader';
import MixCategoryListItem from '../../components/MixCategoryListItem';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useNotifications } from '../../hooks/notifications';
import { useTheme } from '../../hooks/theme';

import { Container, Headline, FloatingButton } from './styles';

const MixCategories = ({ navigation }) => {
  const { navigate } = useNavigation();
  const { refreshNotifications } = useNotifications();
  const { colors } = useTheme();

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
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader
        title="Mixes"
        drawerNavigation={navigation}
        onClickSearch={() => navigate('SearchMixes')}
      />

      <Container>
        <Headline color={colors.text}>Categorias</Headline>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <MixCategoryListItem category={item} isFirst={index === 0} />
          )}
        />

        <FloatingButton
          onPress={handleCreateMixButtonPress}
          backgroundColor={colors.accentColor}
        >
          <Icon name="add" size={28} color="white" />
        </FloatingButton>
      </Container>
    </>
  );
};

export default MixCategories;
