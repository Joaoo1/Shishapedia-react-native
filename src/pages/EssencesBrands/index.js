import { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/DrawerPageHeader';
import EssenceBrandListItem from '../../components/EssenceBrandListItem';
import LoadingIndicator from '../../components/LoadingIndicator';
import Input from '../../components/Input';
import api from '../../services/api';
import { useNotifications } from '../../hooks/notifications';
import { useTheme } from '../../hooks/theme';

import { NotFound, InputContainer, List } from './styles';

const EssencesBrands = ({ navigation }) => {
  const { refreshNotifications } = useNotifications();
  const { colors } = useTheme();

  const [brands, setBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useFocusEffect(() => {
    refreshNotifications();
  }, []);

  useEffect(() => {
    (async () => {
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
    })();
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
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader title="Essências" drawerNavigation={navigation} />
      <InputContainer>
        <Input
          searchIcon
          placeholder="Qual marca você procura?"
          onChangeText={(text) => handleSearchBrands(text)}
        />
      </InputContainer>
      {brands.length > 0 && (
        <List
          data={brands}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <EssenceBrandListItem brand={item} isFirst={index === 0} />
          )}
        />
      )}

      {!isLoading && brands.length === 0 && (
        <NotFound color={() => colors.text}>Nenhuma marca encontrada</NotFound>
      )}
    </>
  );
};

export default EssencesBrands;
