import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import MyInput from '../../components/Input';
import { metrics, fonts } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  margin-top: 20px;
  flex: 1;
`;

const Input = styled(MyInput)`
  height: 250px;
  padding-top: 10px;
`;

const Description = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: ${() => `${fonts.regularSize}px`};
  color: ${({ color }) => color};
  text-align: justify;
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

const FooterContainer = styled.View`
  margin-bottom: 30px;
  position: absolute;
  bottom: 0;
  right: 25px;
`;

const FooterText = styled.Text`
  text-align: right;
  font-family: ${() => fonts.light};
  font-size: ${() => `${fonts.tinySize}px`};
  color: ${({ color }) => color};
`;

export {
  Container,
  Input,
  Description,
  Button,
  ButtonText,
  FooterContainer,
  FooterText,
};
