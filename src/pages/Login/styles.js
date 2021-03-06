import { SafeAreaView } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import MyButton from '../../components/Button';

import { fonts, metrics } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  flex: 1;
`;

const Headline = styled.Text`
  font-family: ${() => fonts.bold};
  font-size: ${() => `${fonts.titleSize}px`};
  color: ${({ color }) => color};
  margin: 30px 0 10px 0;
  text-align: center;
`;

const Button = styled(MyButton)`
  margin-top: 20px;
`;

const BaseSocialButton = styled(RectButton)`
  margin-top: 12px;
  flex-direction: row;
  background-color: #ffffff;
  height: ${() => `${metrics.inputHeight}px`};
  align-items: center;
  border-radius: ${() => `${metrics.inputBorderRadius}px`};
  width: 100%;
  padding: 0 16px 0 16px;
`;

const GoogleButton = styled(BaseSocialButton)`
  background-color: #ffffff;
`;

const GoogleButtonText = styled.Text`
  color: rgba(0, 0, 0, 0.78);
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.bold};
  margin-left: 15px;
  margin-top: 3px;
`;

const FacebookButton = styled(BaseSocialButton)`
  background-color: #3b5999;
`;

const FacebookButtonText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.bold};
  margin-left: 15px;
  margin-top: 2px;
`;

const OrText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.bold};
  margin-top: 20px;
  text-align: center;
`;

const ForgotPasswordText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.light};
  margin-top: 10px;
  align-self: flex-start;
`;

const CreateAccountText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.bold};
  margin-top: 30px;
  align-self: center;
  text-decoration: underline;
`;

const ContinueWithoutLoginText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.bold};
`;

const ContinueWithoutLoginButton = styled(TouchableOpacity)`
  border-color: #ffffff;
  border-width: 1px;
  border-radius: 5px;
  padding: 5px 20px 5px 20px;
  margin-top: 30px;
  opacity: 0.8;
  align-self: center;
`;

export {
  Container,
  Headline,
  Button,
  GoogleButton,
  GoogleButtonText,
  FacebookButton,
  FacebookButtonText,
  OrText,
  ForgotPasswordText,
  CreateAccountText,
  ContinueWithoutLoginButton,
  ContinueWithoutLoginText,
};
