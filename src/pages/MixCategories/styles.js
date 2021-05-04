import { SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { fonts, metrics } from '../../styles';

const horizontalPadding = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const Headline = styled.Text`
  padding: ${() => `15px ${horizontalPadding}px 15px ${horizontalPadding}px`};
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
`;

const FloatingButton = styled(TouchableOpacity)`
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  justify-content: center;
  box-shadow: 4px 5px 12px rgba(0, 0, 0, 0.81);
  align-self: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export { Container, Headline, FloatingButton };
