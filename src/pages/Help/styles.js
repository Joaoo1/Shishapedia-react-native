import { SafeAreaView, ScrollView as Scroll } from 'react-native';
import styled from 'styled-components';
import MyButton from '../../components/Button';

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

const Button = styled(MyButton)`
  margin: 20px 0 30px 0;
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
  Description,
};
