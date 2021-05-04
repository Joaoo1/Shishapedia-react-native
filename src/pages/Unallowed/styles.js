import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

import { metrics, fonts } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  flex: 1;
  align-items: center;
  justify-content: space-between;
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
  margin-top: 10px;
  margin-bottom: 40px;
`;
const Text = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export { Container, Title, Headline, Text };
