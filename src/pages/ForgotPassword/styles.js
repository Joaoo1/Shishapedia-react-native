import styled from 'styled-components';
import { ScrollView } from 'react-native';

import { metrics, fonts } from '../../styles';
import MyButton from '../../components/Button';

const paddingHorizontal = metrics.screenHorizontalPadding + 5;

const Container = styled(ScrollView)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  flex: 1;
`;

const Button = styled(MyButton)`
  margin-top: 20px;
`;

const Text = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  margin-top: 10px;
`;

export { Container, Button, Text };
