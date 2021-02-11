import { useState, useEffect } from 'react';
import { View, Image, Text, SafeAreaView, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { FormatDate } from '../../helpers/FormatDate';
import PageHeader from '../../components/DrawerPageHeader';

import FavoriteIcon from '../../assets/icons/Favorite';
import styles from './styles';

const EssenceInfo = ({ navigation, route }) => {
  const [isFavorite, setFavorite] = useState(null);
  const [essence, setEssence] = useState({});
  const { user } = useAuth();

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
        } catch (error) {
          if (error.response) {
            ToastAndroid.show(error.response.data.error, ToastAndroid.SHORT);
          } else {
            ToastAndroid.show('Erro ao carregar favoritos', ToastAndroid.SHORT);
          }
        }
      }
    }

    fetchFavorite();
  }, []);

  function handleNavigateToReviews() {
    navigation.navigate('EssenceReviews', { essence });
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
    } catch (error) {
      if (error.response) {
        ToastAndroid.show(error.response.data.error, ToastAndroid.SHORT);
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
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
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
          <Text style={styles.descriptionText}>{essence.description}</Text>
          {essence.proposal && (
            <Text style={styles.boldText}>
              {'Proposta: '}
              <Text style={styles.descriptionText}>{essence.proposal}</Text>
            </Text>
          )}
          {essence.release_date !== null && (
            <Text style={styles.boldText}>
              {'Data da lançamento: '}
              <Text style={styles.descriptionText}>{essence.release_date}</Text>
            </Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default EssenceInfo;
