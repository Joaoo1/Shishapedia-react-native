import styled from 'styled-components';

import { fonts, metrics } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 60px;
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
`;

const RightIconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Title = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: ${() => `${fonts.titleSize}px`};
  color: ${({ color }) => color};
  margin-top: 2px;
`;

const Badge = styled.View`
  position: absolute;
  top: -7px;
  right: -2px;
  background-color: #eb4034;
  height: 18px;
  width: 18px;
  border-radius: 50px;
  justify-content: center;
`;

const BadgeText = styled.Text`
  text-align: center;
  color: white;
  font-family: ${() => fonts.bold};
`;

export { Container, RightIconContainer, Title, Badge, BadgeText };
