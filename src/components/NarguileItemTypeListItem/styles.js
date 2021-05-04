import styled from 'styled-components';

import { fonts, metrics } from '../../styles';

const horinzontalPadding = metrics.screenHorizontalPadding;

const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${() => `12px ${horinzontalPadding}px 12px ${horinzontalPadding}px`};
  border-bottom-color: ${({ dividerColor }) => dividerColor};
  border-bottom-width: 0.5px;
  flex: 1;
  margin: 0 5px 0 5px;
`;

const FirstItem = styled(ListItem)`
  border-top-color: ${({ dividerColor }) => dividerColor};
  border-top-width: 0.5px;
`;

const ItemTitle = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: ${() => `${fonts.regularSize}px`};
  color: ${({ color }) => color};
  flex: 1;
`;

export { ListItem, FirstItem, ItemTitle };
