import { useState, useEffect } from 'react';
import { View, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageView from 'react-native-image-viewing';
import crashlytics from '@react-native-firebase/crashlytics';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { FormatDate } from '../../helpers/FormatDate';
import PageHeader from '../../components/DrawerPageHeader';

import FavoriteIcon from '../../assets/icons/Favorite';
import {
  Container,
  ScrollView,
  ImageContainer,
  Image,
  BoldText,
  EssenceName,
  InfoContainer,
  InfoHeader,
  Rate,
  RatesContainer,
  Reviews,
  DescriptionText,
} from './styles';
import { useTheme } from '../../hooks/theme';

const EssenceInfo = ({ navigation, route }) => {
  const { user } = useAuth();
  const { colors } = useTheme();

  const [isFavorite, setFavorite] = useState(null);
  const [essence, setEssence] = useState({});
  const [showImage, setShowImage] = useState(false);

  const images = [
    {
      uri: essence.image ? essence.image.url : '',
    },
  ];

  useEffect(() => {
    const { release_date: releaseDate } = route.params.essence;
    if (releaseDate) {
      const fomartedReleaseDate = FormatDate(route.params.essence.release_date);
      setEssence({
        ...route.params.essence,
        release_date: fomartedReleaseDate,
      });
    } else {
      setEssence(route.params.essence);
    }

    async function fetchFavorite() {
      if (user) {
        try {
          const response = await api.get(
            `/favorite_essence/${route.params.essence.id}`,
          );
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

  async function fetchReviews() {
    const response = await api.get(`/essence/${essence.id}/reviews`);
    setEssence({ ...essence, averageRating: response.data.averageRating });
  }

  function handleNavigateToReviews() {
    navigation.navigate('EssenceReviews', {
      essence,
      onSendReview: fetchReviews,
    });
  }

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
        await api.delete(`/favorite_essence/${essence.id}`);

        ToastAndroid.show('Removido dos favoritos.', ToastAndroid.SHORT);
      } else {
        await api.post('/favorite_essence', {
          essence_id: essence.id,
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
      <ImageView
        images={images}
        imageIndex={0}
        visible={showImage}
        onRequestClose={() => setShowImage(false)}
      />
      <Container>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageContainer
            backgroundColor={colors.imageGrayBackground}
            onTouchEnd={() => setShowImage(true)}
          >
            <Image
              resizeMode="contain"
              source={essence.image && { uri: essence.image.url }}
            />
          </ImageContainer>
          <InfoContainer backgroundColor={colors.white}>
            <InfoHeader>
              <EssenceName color={colors.text}>{essence.name}</EssenceName>
              <View onTouchStart={handleFavoriteButtonPress}>
                <FavoriteIcon
                  enabled={isFavorite != null}
                  active={isFavorite}
                  size={32}
                />
              </View>
            </InfoHeader>
            <RatesContainer onTouchStart={handleNavigateToReviews}>
              <Icon name="star" color="#FFDD55" size={14} />
              <Rate>{essence.averageRating}</Rate>
              <Reviews>{`${essence.reviews} Avaliações`}</Reviews>
            </RatesContainer>
            {essence.proposal && (
              <BoldText color={colors.text}>
                {`Proposta: ${essence.proposal}`}
              </BoldText>
            )}
            {essence.release_date !== null && (
              <BoldText color={colors.text}>
                {`Data da lançamento: ${essence.release_date}`}
              </BoldText>
            )}
            <DescriptionText color={colors.text}>
              {essence.description}
            </DescriptionText>
          </InfoContainer>
        </ScrollView>
      </Container>
    </>
  );
};

export default EssenceInfo;
