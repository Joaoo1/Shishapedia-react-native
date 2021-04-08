import { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
  LogBox,
  Alert,
} from 'react-native';
import { RectButton, TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import crashlytics from '@react-native-firebase/crashlytics';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import PageHeader from '../../components/DrawerPageHeader';
import { FormatDateWithHour } from '../../helpers/FormatDate';

import Star from '../../assets/icons/Star';
import { colors } from '../../styles';
import styles from './styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const EssenceReviews = ({ route }) => {
  const { user } = useAuth();

  const [isLoading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [comment, setComment] = useState('');

  const { essence, onSendReview } = route.params;

  async function fetchReviews() {
    try {
      setLoading(true);
      const response = await api.get(`/essence/${essence.id}/reviews`);
      const mReviews = response.data.reviews;
      mReviews.forEach((r) => {
        r.date = FormatDateWithHour(r.date);
      });
      setReviews(mReviews);
      setAverageRating(response.data.averageRating);
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show(
        'Ocorreu um erro ao carregar avaliações da essência',
        ToastAndroid.SHORT,
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  async function onSubmitButtonPress() {
    if (rating === 0) {
      ToastAndroid.show('Insira uma nota para a essência', ToastAndroid.SHORT);
      return;
    }

    try {
      setLoading(true);
      await api.post(`/essence/${essence.id}/reviews`, {
        rating,
        comment,
        userId: user.id,
      });

      setComment('');
      setRating(0);
      ToastAndroid.show('Publicado com sucesso!', ToastAndroid.SHORT);
      fetchReviews();
      onSendReview();
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show(
        err.response?.data?.error ?? 'Ocorreu um erro ao publicar avaliação',
        ToastAndroid.SHORT,
      );
    } finally {
      setLoading(false);
    }
  }

  async function deleteReview(reviewId) {
    try {
      await api.delete(`/essence_review/${reviewId}`);

      ToastAndroid.show('Avaliação excluida com sucesso', ToastAndroid.SHORT);
      fetchReviews();
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show(
        err.response?.data?.error ?? 'Ocorreu um erro ao excluir avaliação',
        ToastAndroid.SHORT,
      );
    }
  }

  function handleDeleteButtonPress(reviewId) {
    Alert.alert(
      'Excluir avaliação',
      'Voce realmente deseja excluir sua avaliação?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          style: 'destructive',
          text: 'SIM',
          onPress: () => deleteReview(reviewId),
        },
      ],
    );
  }

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          animating={isLoading}
          color={colors.accentColor}
        />
      )}

      <PageHeader backButton title="Informações" notifications={false} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContainerStyle}
      >
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: route.params.essence.image.url }}
            style={styles.image}
          />
          <Text style={styles.headerText}>{route.params.essence.name}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" color="#FFDD55" size={16} />
            <Text style={styles.rating}>{averageRating}</Text>
          </View>
        </View>
        <View style={styles.reviewsContainer}>
          <View style={styles.makeReviewContainer}>
            <TextInput
              style={styles.input}
              multiline
              placeholder={
                user
                  ? 'Deixe sua opinião sobre a essência'
                  : 'Você precisa estar logado para poder deixar sua opinião sobre a essência'
              }
              value={comment}
              onChangeText={(text) => setComment(text)}
              editable={!!user}
              maxLength={255}
            />
            <View style={styles.makeReviewFooter}>
              <View style={styles.starsContainer}>
                <View style={styles.star} onTouchStart={() => setRating(1)}>
                  <Star color="#FFDD55" size={28} active={rating >= 1} />
                </View>
                <View style={styles.star} onTouchStart={() => setRating(2)}>
                  <Star color="#FFDD55" size={28} active={rating >= 2} />
                </View>
                <View style={styles.star} onTouchStart={() => setRating(3)}>
                  <Star color="#FFDD55" size={28} active={rating >= 3} />
                </View>
                <View style={styles.star} onTouchStart={() => setRating(4)}>
                  <Star color="#FFDD55" size={28} active={rating >= 4} />
                </View>
                <View style={styles.star} onTouchStart={() => setRating(5)}>
                  <Star color="#FFDD55" size={28} active={rating >= 5} />
                </View>
              </View>
              <RectButton
                style={styles.button}
                onPress={onSubmitButtonPress}
                enabled={!!user}
              >
                <Text style={styles.buttonText}>Publicar</Text>
              </RectButton>
            </View>
          </View>
          <View>
            {reviews.length === 0 ? (
              <Text style={styles.notFound}>
                {!isLoading && 'Não há comentários, seja o primeiro!'}
              </Text>
            ) : (
              reviews.map((review) => (
                <View style={styles.review} key={`${review.id}a`}>
                  <View style={styles.reviewInfoContainer}>
                    <View>
                      <Text style={styles.reviewAuthor}>
                        {review.user.name}
                      </Text>
                      <View style={styles.reviewRatingContainer}>
                        {[...Array(review.rating)].map((v, idx) => (
                          <Icon
                            // eslint-disable-next-line react/no-array-index-key
                            key={idx}
                            name="star"
                            color="#FFDD55"
                            size={15}
                          />
                        ))}
                        <Text style={styles.reviewDate}>{review.date}</Text>
                      </View>
                    </View>
                    {review.user.id === user?.id && (
                      <MaterialIcon
                        name="delete-outline"
                        size={24}
                        color="#f23f3f"
                        onPress={() => handleDeleteButtonPress(review.id)}
                      />
                    )}
                  </View>

                  {review.comment !== '' && (
                    <Text style={styles.reviewText}>{review.comment}</Text>
                  )}

                  <View style={styles.divider} />
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EssenceReviews;
