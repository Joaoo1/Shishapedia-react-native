import { SafeAreaView } from 'react-native';
import styled from 'styled-components';

import { fonts, metrics } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const Headline = styled.Text`
  font-family: ${() => fonts.bold};
  font-size: ${() => `${fonts.bigSize}px`};
  color: ${({ color }) => color};
  padding: ${() => `15px ${paddingHorizontal}px 15px ${paddingHorizontal}px`};
`;

export { Container, Headline };
