import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/DrawerPageHeader';
import EssenceListItem from '../../components/EssenceListItem';
import api from '../../services/api';
import NotFoundImg from '../../assets/illustrations/not_found.svg';
import { useTheme } from '../../hooks/theme';
import LoadingIndicator from '../../components/LoadingIndicator';

import {
  Container,
  Input,
  InputContainer,
  Icon,
  ImageContainer,
  NoFoundEssenceText,
  NotFoundTitle,
} from './styles';

const Essences = ({ route }) => {
  const { colors } = useTheme();
  const [searchString, setSearchString] = useState('');
  const [essences, setEssences] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [allEssences, setAllEssences] = useState([]);

  const { brandId, brandName, userId } = route.params;

  useEffect(() => {
    async function fetchEssences() {
      try {
        if (userId) {
          const response = await api.get('/favorite_essences');
          setAllEssences(response.data.favorites);
          setEssences(response.data.favorites);
        } else {
          const response = await api.get(`/essences/${brandId}`);
          setAllEssences(response.data);
          setEssences(response.data);
        }
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show(
          'Ocorreu um erro ao carregar essências',
          ToastAndroid.SHORT,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchEssences();
  }, []);

  async function handleSearchEssences() {
    if (searchString === '') {
      setEssences(allEssences);
      return;
    }

    if (userId) {
      // eslint-disable-next-line prettier/prettier
      const filter = (essence) => essence.name.toLowerCase().includes(searchString.toLowerCase());
      const filteredEssences = allEssences.filter(filter);
      setEssences(filteredEssences);
      return;
    }

    try {
      setLoading(true);
      const response = await api.get(`/essences_search/${brandId}`, {
        params: { name: searchString },
      });

      setEssences(response.data);
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show('Erro ao carregar essências', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader title={brandName ?? 'Essências'} backButton />
      <Container>
        {!isLoading && allEssences.length === 0 && (
          <>
            <NotFoundTitle color={colors.text}>Nada por aqui...</NotFoundTitle>
            <NoFoundEssenceText color={colors.text}>
              {userId
                ? 'Não há nenhum favorito adicionado'
                : 'Ainda não existe essências cadastrados nesta marca.'}
            </NoFoundEssenceText>
            <ImageContainer>
              <NotFoundImg />
            </ImageContainer>
          </>
        )}
        {!isLoading && allEssences.length > 0 && (
          <>
            <InputContainer backgroundColor={colors.inputBackground}>
              <Input
                borderColor={colors.inputBorder}
                textColor={colors.text}
                placeholder="Digite o nome da essência"
                placeholderTextColor={colors.inputPlaceholderText}
                value={searchString}
                onChangeText={(text) => setSearchString(text)}
                onSubmitEditing={handleSearchEssences}
              />
              <Icon name="search" size={28} color="#c1bccc" />
            </InputContainer>
            {essences.length === 0 ? (
              <NoFoundEssenceText color={colors.text}>
                Nenhuma essência encontrada
              </NoFoundEssenceText>
            ) : (
              <FlatList
                data={essences}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <EssenceListItem essence={item} isFirst={index === 0} />
                )}
              />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Essences;
