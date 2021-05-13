import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

import { fonts, metrics } from '../../styles';
import MyButton from '../../components/Button';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  flex: 1;
  align-items: center;
`;

const Button = styled(MyButton)`
  margin-top: 20px;
`;

const Title = styled.Text`
  font-size: ${() => `${fonts.titleSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
  text-align: center;
  margin-top: 15px;
  margin-bottom: 60px;
`;
const Headline = styled.Text`
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
  text-align: center;
`;

const Text = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  text-align: center;
  margin-top: 40px;
`;

export { Container, Button, Title, Headline, Text };
