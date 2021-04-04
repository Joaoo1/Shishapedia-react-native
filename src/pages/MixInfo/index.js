import { useEffect, useState } from 'react';
import { View, Image, Text, SafeAreaView, ToastAndroid } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/DrawerPageHeader';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import FavoriteIcon from '../../assets/icons/Favorite';
import styles from './styles';

const MixInfo = ({ route }) => {
  const { user } = useAuth();
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
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.url }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoHeader}>
            <Text style={styles.mixName}>
              {`${essence1.name} com ${essence2.name}`}
            </Text>
            <View onTouchStart={handleFavoriteButtonPress}>
              <FavoriteIcon
                enabled={isFavorite != null}
                active={isFavorite}
                size={32}
              />
            </View>
          </View>

          <Text style={styles.boldText}>
            {'Essência 1: '}
            <Text style={styles.descriptionText}>
              {`${essence1.name} - (${essence1Proportion}%)`}
            </Text>
          </Text>
          <Text style={styles.boldText}>
            {'Essência 2: '}
            <Text style={styles.descriptionText}>
              {`${essence2.name} - (${essence2Proportion}%)`}
            </Text>
          </Text>
          <Text style={styles.boldText}>
            {'Autor 1: '}
            <Text style={styles.descriptionText}>{author.name}</Text>
          </Text>
          <Text style={styles.boldText}>
            {'Data: '}
            <Text style={styles.descriptionText}>05/12/2020</Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default MixInfo;
