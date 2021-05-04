import styled from 'styled-components';
import { Form as Unform } from '@unform/mobile';
import RNDropDownPicker from 'react-native-dropdown-picker';

import MyInput from '../../components/Input';

import { metrics, fonts } from '../../styles';

const horizontalPadding = metrics.screenHorizontalPadding;

const Form = styled(Unform)`
  margin: ${() => `0px ${horizontalPadding}px 40px ${horizontalPadding}px`};
`;

const Input = styled(MyInput)`
  height: ${() => `${metrics.inputHeight}px`};
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

const DescriptionInput = styled(Input)`
  height: 150px;
  padding-top: 8px;
`;

const InputContainer = styled.View`
  margin-top: 25px;
`;

const InputLabel = styled.Text`
  font-family: ${() => fonts.regular};
  font-size: ${() => `${fonts.inputSize}px`};
  color: ${({ color }) => color};
`;

const WarningText = styled.Text`
  color: red;
  margin: ${() => `20px ${horizontalPadding}px 0px ${horizontalPadding}px`};
`;

const InputCategory = styled(InputContainer)`
  height: 200px;
`;

const DropDownPicker = styled(RNDropDownPicker)`
  border-radius: ${() => `${metrics.inputBorderRadius}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export {
  Form,
  Input,
  DescriptionInput,
  DropDownPicker,
  InputCategory,
  InputContainer,
  InputLabel,
  WarningText,
};
