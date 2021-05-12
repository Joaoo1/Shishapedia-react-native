import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

import { fonts, metrics } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  margin-bottom: ${() => `${metrics.BottomTabHeight + 35}px`};
`;

const InputContainer = styled.View`
  margin: 0 20px 20px 20px;
`;

const NotFoundTitle = styled.Text`
  font-size: ${() => `${fonts.titleSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
  align-self: center;
  margin-top: 20px;
  padding: ${() => `15px ${paddingHorizontal}px 15px ${paddingHorizontal}px`};
`;

const NoFoundMixesText = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  align-self: center;
  text-align: center;
  padding: ${() => `15px ${paddingHorizontal}px 15px ${paddingHorizontal}px`};
`;

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export {
  Container,
  InputContainer,
  ImageContainer,
  NoFoundMixesText,
  NotFoundTitle,
};
