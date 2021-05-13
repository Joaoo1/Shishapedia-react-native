import styled from 'styled-components';
import { Image as RNImage, ScrollView } from 'react-native';

import MyInput from '../../components/Input';

import { fonts, metrics } from '../../styles';
import MyButton from '../../components/Button';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(ScrollView)`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const HeaderContainer = styled.View`
  padding: ${() => `${paddingHorizontal}px`};
  flex-direction: row;
  align-items: center;
`;

const ReviewsContainer = styled.View`
  flex: 1;
  background-color: ${({ color }) => color};
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  border-width: 1px;
  border-color: transparent;
  padding-left: ${() => `${paddingHorizontal + 10}px`};
  padding-right: ${() => `${paddingHorizontal + 10}px`};
  padding-top: 30px;
`;

const ReviewAuthor = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
`;

const ReviewText = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  margin-top: 15px;
`;

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const Divider = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ color }) => color}; /* divider */
  margin: 15px 0 30px 0;
`;

const HeaderText = styled.Text`
  font-size: ${() => `${fonts.bigSize + 4}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
  margin-left: 10px;
`;

const Rating = styled.Text`
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  margin: 5px 0 0 5px;
`;

const StarContainer = styled.View`
  margin-right: 5px;
`;

const Image = styled(RNImage)`
  width: 28px;
  height: 44px;
`;

const MakeReviewFooter = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 40px;
`;

const StarsContainer = styled.View`
  flex-direction: row;
`;

const ReviewInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ReviewRatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;

const ReviewDate = styled.Text`
  font-size: ${() => `${fonts.tinySize}px`};
  font-family: ${() => fonts.light};
  color: #9b9b9b;
  margin-left: 10px;
`;

const Button = styled(MyButton)`
  margin-left: 15px;
  flex: 1;
`;
const NotFound = styled.Text`
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  flex-grow: 1;
  align-self: center;
  margin-top: 20px;
`;

const Input = styled(MyInput)`
  height: 130px;
  padding-top: 10px;
`;

export {
  Container,
  HeaderContainer,
  ReviewsContainer,
  Input,
  Button,
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
};
