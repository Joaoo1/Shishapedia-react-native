import styled from 'styled-components';
import { Image } from 'react-native';

import { fonts } from '../../styles';

const ListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-width: 0.5px;
`;

const FirstItem = styled(ListItem)`
  border-top-color: rgba(0, 0, 0, 0.15);
  border-top-width: 0.5px;
`;

const LeftContainer = styled.View`
  flex-direction: row;
`;

const ItemImage = styled(Image)`
  flex: 1%;
  max-width: 50px;
  max-height: 50px;
  margin-right: 20px;
`;

const ItemTitle = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: ${() => `${fonts.regularSize}px`};
  color: ${({ color }) => color};
`;

const ItemLabel = styled.Text`
  font-family: ${() => fonts.light};
  font-size: ${() => `${fonts.regularSize}px`};
  color: #9b9b9b;
  margin-top: 2px;
`;

const TextContainer = styled.View`
  justify-content: center;
`;

export {
  ListItem,
  FirstItem,
  LeftContainer,
  ItemImage,
  ItemTitle,
  ItemLabel,
  TextContainer,
};
