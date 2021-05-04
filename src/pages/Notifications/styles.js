import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

import { metrics, fonts } from '../../styles';

const Container = styled(SafeAreaView)`
  padding: ${() => `${metrics.screenHorizontalPadding}px`};
  align-items: center;
`;
const Text = styled.Text`
  font-size: ${() => `${fonts.titleSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
  margin: 20px 0 50px 0;
  text-align: center;
`;

export { Text, Container };
