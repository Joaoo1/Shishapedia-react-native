import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';

import { fonts, metrics } from '../../styles';

const horizontalPadding = metrics.screenHorizontalPadding;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 60px;
  padding: ${() => `15px ${horizontalPadding}px 15px ${horizontalPadding}px`};
`;

const Title = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: ${() => `${fonts.titleSize}px`};
  color: ${({ color }) => color};
`;

const LeftIcon = styled(Icon)`
  margin: 2px 30px 0 0;
`;

const RightIconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Save = styled.Text`
  color: ${({ color }) => color};
`;

export { Container, Title, LeftIcon, RightIconContainer, Save };
