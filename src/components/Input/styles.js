import styled from 'styled-components';
import { TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { metrics, fonts } from '../../styles';

const MyInput = styled(TextInput)`
  height: ${(props) => `${props.height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${() => `${fonts.inputSize}px`};
  font-family: ${() => fonts.regular};
  border-radius: ${() => `${metrics.inputBorderRadius}px`};
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor}; /* inputBorder */
  padding: ${() => '0 16px 0 16px'};
  margin-top: 5px;
  color: ${({ textColor }) => textColor};
`;

const Error = styled.Text`
  color: #ff0000;
  font-size: 12px;
`;

const Label = styled.Text`
  color: ${({ textColor }) => textColor};
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
`;

const InputContainer = styled.View`
  margin-top: 20px;
`;

const Icon = styled(MaterialIcon)`
  position: absolute;
  right: 16px;
  top: 15px;
`;

export { MyInput, Error, Label, InputContainer, Icon };
