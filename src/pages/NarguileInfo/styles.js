import { SafeAreaView, Image as RNImage } from 'react-native';
import styled from 'styled-components';

import { fonts, metrics } from '../../styles';

const horizontalPadding = metrics.screenHorizontalPadding + 10;

const Container = styled(SafeAreaView)`
  flex: 1;
`;

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
  width: 95%;
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

const DescriptionText = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.light};
  color: ${({ color }) => color};
  margin-bottom: 10px;
  text-align: justify;
`;

const NarguileName = styled.Text`
  font-size: 26px;
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
  max-width: 260px;
  margin-bottom: 10px;
`;

export {
  Container,
  ImageContainer,
  Image,
  NarguileName,
  InfoContainer,
  DescriptionText,
};
