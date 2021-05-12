import styled from 'styled-components';
import { Form as Unform } from '@unform/mobile';
import RNDropDownPicker from 'react-native-dropdown-picker';

import Input from '../../components/FormInput';

import { metrics, fonts } from '../../styles';

const horizontalPadding = metrics.screenHorizontalPadding;

const Form = styled(Unform)`
  margin: ${() => `0px ${horizontalPadding}px 40px ${horizontalPadding}px`};
`;

const DescriptionInput = styled(Input)`
  height: 150px;
  padding-top: 8px;
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

const InputCategory = styled.View`
  height: 200px;
  margin-top: 25px;
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
  InputLabel,
  WarningText,
};
