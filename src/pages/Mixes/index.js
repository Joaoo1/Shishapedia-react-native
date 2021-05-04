import { useEffect, useState } from 'react';
import { FlatList, ToastAndroid } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import api from '../../services/api';
import PageHeader from '../../components/DrawerPageHeader';
import MixListItem from '../../components/MixListItem';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useTheme } from '../../hooks/theme';

import NotFoundImg from '../../assets/illustrations/not_found.svg';
import {
  Container,
  Input,
  InputContainer,
  Icon,
  ImageContainer,
  NoFoundMixesText,
  NotFoundTitle,
} from './styles';

const Mixes = ({ route }) => {
  const { colors } = useTheme();

  const [mixes, setMixes] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [allMixes, setAllMixes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMixes() {
      try {
        if (route.params.userId) {
          const response = await api.get('/favorite_mixes');
          setMixes(response.data.favorites);
          setAllMixes(response.data.favorites);
        } else {
          const response = await api.get(`/mixes/${route.params.categoryId}`);
          setMixes(response.data.mixes);
          setAllMixes(response.data.mixes);
        }
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show(
          'Ocorreu um erro ao carregar mixes',
          ToastAndroid.SHORT,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchMixes();
  }, []);

  async function handleSearchMixes() {
    if (searchString === '') {
      setMixes(allMixes);
      return;
    }

    try {
      setLoading(true);
      const response = await api.get('/mix_search', {
        params: {
          name: searchString,
          category: route.params.categoryId,
        },
      });

      setMixes(response.data.mixes);
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        ToastAndroid.show(err.response.data.error.ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader title="Mixes" backButton />
      <Container>
        {!isLoading && allMixes.length === 0 && (
          <>
            <NotFoundTitle color={colors.text}>Nada por aqui...</NotFoundTitle>
            <NoFoundMixesText color={colors.text}>
              {route.params.userId
                ? 'Não há nenhum favorito adicionado'
                : 'Ainda não existe mixes cadastrados nesta categoria. \n Seja o primeiro a indicar um!'}
            </NoFoundMixesText>
            <ImageContainer>
              <NotFoundImg />
            </ImageContainer>
          </>
        )}

        {!isLoading && allMixes.length > 0 && (
          <>
            <InputContainer backgroundColor={colors.inputBackground}>
              <Input
                borderColor={colors.inputBorder}
                textColor={colors.text}
                placeholder="Digite o nome da essência"
                placeholderTextColor="#c1bccc"
                value={searchString}
                onChangeText={(text) => setSearchString(text)}
                onSubmitEditing={handleSearchMixes}
              />
              <Icon
                name="search"
                size={28}
                color="#c1bccc"
                onPress={handleSearchMixes}
              />
            </InputContainer>
            {mixes.length === 0 ? (
              <NoFoundMixesText color={colors.text}>
                Nenhum mix encontrado
              </NoFoundMixesText>
            ) : (
              <FlatList
                data={mixes}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }) => (
                  <MixListItem mix={item} isFirst={index === 0} />
                )}
              />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Mixes;
