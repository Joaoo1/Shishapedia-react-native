import {
  SafeAreaView,
  Image as RNImage,
  ScrollView as Scroll,
} from 'react-native';
import styled from 'styled-components';

import { fonts, metrics } from '../../styles';

const horizontalPadding = metrics.screenHorizontalPadding + 10;

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const ScrollView = styled(Scroll)``;

const ImageContainer = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: 370px;
  align-items: center;
  justify-content: center;
  margin-bottom: -60px;
`;

const Image = styled(RNImage)`
  flex: 1;
  width: 100%;
  max-height: 280px;
  margin-bottom: 60px;
`;

const InfoContainer = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100%;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-width: 1px;
  border-color: transparent;
  padding: ${() => `30px ${horizontalPadding}px 40px ${horizontalPadding}px`};
`;

const InfoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BoldText = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
  margin-bottom: 10px;
`;

const DescriptionText = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.light};
  color: ${({ color }) => color};
  margin-bottom: 10px;
  text-align: justify;
`;

const EssenceName = styled(BoldText)`
  font-size: 26px;
  max-width: 260px;
`;

const RatesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const Rate = styled.Text`
  color: #f2c94c;
  margin-left: 3px;
`;
const Reviews = styled.Text`
  font-family: ${() => fonts.light};
  margin: 2px 0 0 10px;
  color: #9b9b9b;
`;

export {
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
};
