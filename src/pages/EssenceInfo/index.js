import { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageView from 'react-native-image-viewing';
import crashlytics from '@react-native-firebase/crashlytics';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { FormatDate } from '../../helpers/FormatDate';
import PageHeader from '../../components/DrawerPageHeader';

import FavoriteIcon from '../../assets/icons/Favorite';
import styles from './styles';

const EssenceInfo = ({ navigation, route }) => {
  const { user } = useAuth();

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
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View
            style={styles.imageContainer}
            onTouchEnd={() => setShowImage(true)}
          >
            <Image
              source={essence.image && { uri: essence.image.url }}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoHeader}>
              <Text style={styles.essenceName}>{essence.name}</Text>
              <View onTouchStart={handleFavoriteButtonPress}>
                <FavoriteIcon
                  enabled={isFavorite != null}
                  active={isFavorite}
                  size={32}
                />
              </View>
            </View>
            <View
              style={styles.ratesContainer}
              onTouchStart={handleNavigateToReviews}
            >
              <Icon name="star" color="#FFDD55" size={14} />
              <Text style={styles.rate}>{essence.averageRating}</Text>
              <Text style={styles.reviews}>
                {`${essence.reviews} Avaliações`}
              </Text>
            </View>
            {essence.proposal && (
              <Text style={styles.boldText}>
                {`Proposta: ${essence.proposal}`}
              </Text>
            )}
            {essence.release_date !== null && (
              <Text style={styles.boldText}>
                {`Data da lançamento: ${essence.release_date}`}
              </Text>
            )}
            <Text style={styles.descriptionText}>{essence.description}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EssenceInfo;
