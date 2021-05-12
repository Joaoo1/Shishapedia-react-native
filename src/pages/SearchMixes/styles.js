import styled from 'styled-components';
import { FlatList } from 'react-native';

import { fonts } from '../../styles';

const InputContainer = styled.View`
  margin: 0 20px 20px 20px;
`;

const NoFoundText = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  align-self: center;
  flex-grow: 1;
  text-align: center;
  margin-top: 15px;
`;

const List = styled(FlatList)`
  padding: 0 20px 0 20px;
`;

export { InputContainer, List, NoFoundText };
