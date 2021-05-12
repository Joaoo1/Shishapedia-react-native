import styled from 'styled-components';
import { FlatList } from 'react-native';

import { fonts } from '../../styles';

const InputContainer = styled.View`
  margin: 0 20px 20px 20px;
`;

const NotFound = styled.Text`
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  flex-grow: 1;
  align-self: center;
  margin-top: 20px;
`;

const List = styled(FlatList)`
  padding: 0 20px 0 20px;
`;

export { InputContainer, NotFound, List };
