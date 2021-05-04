import styled from 'styled-components';

import { fonts, metrics } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled.View`
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: 17px;
  margin-bottom: 80px;
  text-align: center;
  max-width: 250px;
  color: ${({ color }) => color};
`;

const Headline = styled.Text`
  font-family: ${() => fonts.bold};
  font-size: ${() => `${fonts.titleSize}px`};
  margin: 50px 0 0 20px;
  text-align: center;
  max-width: 250px;
  color: ${({ color }) => color};
`;

export { Container, Headline, Text };
