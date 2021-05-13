import styled from 'styled-components';
import { ScrollView } from 'react-native';

import { metrics, fonts } from '../../styles';
import MyButton from '../../components/Button';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(ScrollView)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  flex: 1;
`;

const Button = styled(MyButton)`
  margin-top: 20px;
`;

const PasswordRequirements = styled.Text`
  font-size: ${() => `${fonts.tinySize}px`};
  font-family: ${() => fonts.light};
  color: white;
  margin: 5px 0 0 5px;
`;

export { Container, Button, PasswordRequirements };
