import { SafeAreaView, ScrollView as Scroll } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import MyInput from '../../components/Input';

import { fonts, metrics } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  margin: 20px 0 70px 0;
`;
const ScrollView = styled(Scroll)`
  padding: ${() => `10px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
`;

const HeaderContainer = styled.View`
  align-items: center;
`;

const LogoContainer = styled.View`
  padding: 15px;
  padding-bottom: 5px;
  background: ${({ backgroundColor }) => backgroundColor};
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const HeaderText = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: ${() => `${fonts.regularSize}px`};
  text-align: center;
  color: ${({ color }) => color};
`;

const Input = styled(MyInput)`
  height: 200px;
  padding-top: 10px;
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
  margin-bottom: 30px;
`;

const ButtonText = styled.Text`
  font-size: ${() => `${fonts.inputSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
`;

const Description = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: ${() => `${fonts.regularSize}px`};
  color: ${({ color }) => color};
  text-align: justify;
  margin-top: 20px;
`;

export {
  Container,
  ScrollView,
  HeaderContainer,
  LogoContainer,
  HeaderText,
  Input,
  Button,
  ButtonText,
  Description,
};
