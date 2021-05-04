import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import TextInput from '../../components/Input';

import { metrics, fonts } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

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

const PasswordRequirements = styled.Text`
  font-size: ${() => `${fonts.tinySize}px`};
  font-family: ${() => fonts.light};
  color: white;
  margin: 5px 0 0 5px;
`;

export { Container, Input, Button, ButtonText, PasswordRequirements };
