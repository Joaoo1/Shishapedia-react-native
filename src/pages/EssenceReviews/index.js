import { useEffect, useState } from 'react';
import { ToastAndroid, LogBox, Alert, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import crashlytics from '@react-native-firebase/crashlytics';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import PageHeader from '../../components/DrawerPageHeader';
import LoadingIndicator from '../../components/LoadingIndicator';
import { FormatDateWithHour } from '../../helpers/FormatDate';

import Star from '../../assets/icons/Star';
import {
  Container,
  HeaderContainer,
  ReviewsContainer,
  Input,
  Button,
  ButtonText,
  Divider,
  HeaderText,
  Image,
  MakeReviewFooter,
  NotFound,
  Rating,
  RatingContainer,
  ReviewAuthor,
  ReviewDate,
  ReviewInfoContainer,
  ReviewRatingContainer,
  ReviewText,
  StarContainer,
  StarsContainer,
} from './styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const EssenceReviews = ({ route }) => {
  const { user } = useAuth();
  const { colors } = useTheme();

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
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader backButton title="Informações" notifications={false} />
      <Container
        backgroundColor={colors.imageGrayBackground}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HeaderContainer>
          <Image source={{ uri: route.params.essence.image.url }} />
          <HeaderText color={colors.text}>
            {route.params.essence.name}
          </HeaderText>
          <RatingContainer>
            <Icon name="star" color="#FFDD55" size={16} />
            <Rating color={colors.text}>{averageRating}</Rating>
          </RatingContainer>
        </HeaderContainer>
        <ReviewsContainer color={colors.white}>
          <Input
            style={{ textAlignVertical: 'top' }}
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
          <View>
            <MakeReviewFooter>
              <StarsContainer>
                <StarContainer onTouchStart={() => setRating(1)}>
                  <Star color="#FFDD55" size={28} active={rating >= 1} />
                </StarContainer>
                <StarContainer onTouchStart={() => setRating(2)}>
                  <Star color="#FFDD55" size={28} active={rating >= 2} />
                </StarContainer>
                <StarContainer onTouchStart={() => setRating(3)}>
                  <Star color="#FFDD55" size={28} active={rating >= 3} />
                </StarContainer>
                <StarContainer onTouchStart={() => setRating(4)}>
                  <Star color="#FFDD55" size={28} active={rating >= 4} />
                </StarContainer>
                <StarContainer onTouchStart={() => setRating(5)}>
                  <Star color="#FFDD55" size={28} active={rating >= 5} />
                </StarContainer>
              </StarsContainer>
              <Button
                text="Publicar"
                onPress={onSubmitButtonPress}
                enabled={!!user}
              />
            </MakeReviewFooter>
          </View>
          <View>
            {reviews.length === 0 ? (
              <NotFound color={colors.text}>
                {!isLoading && 'Não há comentários, seja o primeiro!'}
              </NotFound>
            ) : (
              reviews.map((review) => (
                <View key={`${review.id}a`}>
                  <ReviewInfoContainer>
                    <View>
                      <ReviewAuthor color={colors.text}>
                        {review.user.name}
                      </ReviewAuthor>
                      <ReviewRatingContainer>
                        {[...Array(review.rating)].map((v, idx) => (
                          <Icon
                            // eslint-disable-next-line react/no-array-index-key
                            key={idx}
                            name="star"
                            color="#FFDD55"
                            size={15}
                          />
                        ))}
                        <ReviewDate>{review.date}</ReviewDate>
                      </ReviewRatingContainer>
                    </View>
                    {review.user.id === user?.id && (
                      <MaterialIcon
                        name="delete-outline"
                        size={24}
                        color="#f23f3f"
                        onPress={() => handleDeleteButtonPress(review.id)}
                      />
                    )}
                  </ReviewInfoContainer>

                  {review.comment !== '' && (
                    <ReviewText color={colors.text}>
                      {review.comment}
                    </ReviewText>
                  )}

                  <Divider color={colors.divider} />
                </View>
              ))
            )}
          </View>
        </ReviewsContainer>
      </Container>
    </>
  );
};

export default EssenceReviews;
