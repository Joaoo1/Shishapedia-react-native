import styled from 'styled-components';
import { SafeAreaView, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { fonts, metrics } from '../../styles';

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const Input = styled(TextInput)`
  height: ${() => `${metrics.inputHeight}px`};
  font-size: ${() => `${fonts.inputSize}px`};
  font-family: ${() => fonts.regular};
  border-radius: ${() => `${metrics.inputBorderRadius}px`};
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
  padding: ${() => '0 16px 0 16px'};
  color: ${({ textColor }) => textColor};
  flex: 1;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  margin: 20px;
`;

const Icon = styled(MaterialIcon)`
  position: absolute;
  right: 16px;
`;

const NotFound = styled.Text`
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  flex-grow: 1;
  align-self: center;
  margin-top: 20px;
`;

export { Container, Input, InputContainer, Icon, NotFound };
