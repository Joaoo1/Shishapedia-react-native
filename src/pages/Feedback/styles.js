import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

import MyInput from '../../components/Input';
import { metrics, fonts } from '../../styles';
import MyButton from '../../components/Button';

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

const Button = styled(MyButton)`
  margin-top: 20px;
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

export { Container, Input, Description, Button, FooterContainer, FooterText };
