import styled from 'styled-components';
import { ScrollView, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { metrics, fonts } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding + 5;

const Container = styled(ScrollView)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  flex: 1;
`;

const Input = styled(TextInput)`
  height: ${() => `${metrics.inputHeight}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${() => `${fonts.inputSize}px`};
  font-family: ${() => fonts.regular};
  border-radius: ${() => `${metrics.inputBorderRadius}px`};
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
  padding: ${() => '0 16px 0 16px'};
  margin-top: 20px;
  color: ${({ textColor }) => textColor};
`;

const Button = styled(RectButton)`
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${() => `${metrics.inputBorderRadius}px`};
  width: 100%;
  height: ${() => `${metrics.inputHeight}px`};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  font-size: ${() => `${fonts.inputSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
`;

const Text = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color}; /*systemText*/
  margin-top: 10px;
`;

export { Container, Input, Button, ButtonText, Text };
