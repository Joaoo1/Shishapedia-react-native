import { useEffect, useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/DrawerPageHeader';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import FavoriteIcon from '../../assets/icons/Favorite';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  ImageContainer,
  Image,
  MixName,
  InfoContainer,
  DescriptionText,
  BoldText,
  InfoHeader,
} from './styles';

const MixInfo = ({ route }) => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [isFavorite, setFavorite] = useState(null);

  const {
    id,
    image,
    essence1,
    essence2,
    essence1_proportion: essence1Proportion,
    essence2_proportion: essence2Proportion,
    author,
  } = route.params.mix;

  useEffect(() => {
    async function fetchFavorite() {
      if (user) {
        try {
          const response = await api.get(`/favorite_mix/${id}`);
          setFavorite(response.data.favorite);
        } catch (err) {
          crashlytics().recordError(err);
          if (err.response) {
            ToastAndroid.show(err.response.data.err, ToastAndroid.SHORT);
          } else {
            ToastAndroid.show('Erro ao carregar favoritos', ToastAndroid.SHORT);
          }
        }
      }
    }

    fetchFavorite();
  }, []);

  async function handleFavoriteButtonPress() {
    if (!user) {
      ToastAndroid.show(
        'Você precisa estar logado para adicionar favoritos',
        ToastAndroid.LONG,
      );
      return;
    }

    if (isFavorite === null) {
      ToastAndroid.show(
        'Carregando favoritos, espere o coração ficar vermelho',
        ToastAndroid.SHORT,
      );
      return;
    }

    try {
      if (isFavorite) {
        await api.delete(`/favorite_mix/${id}`);

        ToastAndroid.show('Removido dos favoritos.', ToastAndroid.SHORT);
      } else {
        await api.post('/favorite_mix', {
          mix_id: id,
        });

        ToastAndroid.show('Favoritado com sucesso!', ToastAndroid.SHORT);
      }

      setFavorite(!isFavorite);
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        ToastAndroid.show(err.response.data.err, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(
          'Erro ao adicionar aos favoritos',
          ToastAndroid.SHORT,
        );
      }
    }
  }

  return (
    <>
      <PageHeader backButton title="Informações" notifications={false} />
      <Container>
        <ImageContainer backgroundColor={colors.imageGrayBackground}>
          <Image source={{ uri: image.url }} resizeMode="contain" />
        </ImageContainer>
        <InfoContainer backgroundColor={colors.white}>
          <InfoHeader>
            <MixName color={colors.text}>
              {`${essence1.name} com ${essence2.name}`}
            </MixName>
            <View onTouchStart={handleFavoriteButtonPress}>
              <FavoriteIcon
                enabled={isFavorite != null}
                active={isFavorite}
                size={32}
              />
            </View>
          </InfoHeader>

          <BoldText color={colors.text}>
            {'Essência 1: '}
            <DescriptionText color={colors.text}>
              {`${essence1.name} - (${essence1Proportion}%)`}
            </DescriptionText>
          </BoldText>
          <BoldText color={colors.text}>
            {'Essência 2: '}
            <DescriptionText color={colors.text}>
              {`${essence2.name} - (${essence2Proportion}%)`}
            </DescriptionText>
          </BoldText>
          <BoldText color={colors.text}>
            {'Autor 1: '}
            <DescriptionText color={colors.text}>{author.name}</DescriptionText>
          </BoldText>
          <BoldText color={colors.text}>
            {'Data: '}
            <DescriptionText color={colors.text}>05/12/2020</DescriptionText>
          </BoldText>
        </InfoContainer>
      </Container>
    </>
  );
};
export default MixInfo;
