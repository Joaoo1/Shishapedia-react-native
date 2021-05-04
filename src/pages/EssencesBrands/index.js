import { useEffect, useState } from 'react';
import { FlatList, ToastAndroid, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import crashlytics from '@react-native-firebase/crashlytics';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/DrawerPageHeader';
import EssenceBrandListItem from '../../components/EssenceBrandListItem';
import api from '../../services/api';
import { useNotifications } from '../../hooks/notifications';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useTheme } from '../../hooks/theme';

import { Container, Input, InputContainer, Icon, NotFound } from './styles';

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
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader title="Essências" drawerNavigation={navigation} />
      <Container>
        <InputContainer backgroundColor={colors.inputBackground}>
          <Input
            textColor={colors.text}
            borderColor={colors.inputBorder}
            placeholder="Qual marca você procura?"
            placeholderTextColor="#c1bccc"
            onChangeText={(text) => handleSearchBrands(text)}
          />
          <Icon
            onPress={handleSearchBrands}
            name="search"
            size={28}
            color="#c1bccc"
          />
        </InputContainer>
        {brands.length > 0 && (
          <FlatList
            data={brands}
            style={{ paddingHorizontal: 20 }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <EssenceBrandListItem brand={item} isFirst={index === 0} />
            )}
          />
        )}

        {!isLoading && brands.length === 0 && (
          <NotFound color={() => colors.text}>
            Nenhuma marca encontrada
          </NotFound>
        )}
      </Container>
    </>
  );
};

export default EssencesBrands;
