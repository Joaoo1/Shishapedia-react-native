import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import TextInput from '../../components/Input';
import { metrics, fonts } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(ScrollView)`
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
`;

const HeaderContainer = styled.View`
  align-items: center;
  width: 100%;
`;

const HeaderButton = styled(RectButton)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100px;
  height: 35px;
  border-radius: 15px;
  top: -30px;
  justify-content: center;
  align-items: center;
`;

const TextButton = styled.Text`
  color: ${({ color }) => color};
  font-family: ${() => fonts.bold};
  font-size: 13px;
`;

const Input = styled(TextInput)`
  height: ${() => `${metrics.inputHeight}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${() => `${fonts.inputSize}px`};
  font-family: ${() => fonts.regular};
  border-radius: ${() => `${metrics.inputBorderRadius}px`};
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
  padding: ${() => '0 16px 0 16px'};
  margin: 5px 0 20px 0;
  color: ${({ textColor }) => textColor};
`;
const Divider = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ color }) => color};
  margin: 5px 0 20px 0;
`;

const DeleteUserText = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.light};
  color: red;
  text-decoration: underline;
  margin: 30px 0px 20px 0;
`;

export {
  Container,
  HeaderContainer,
  HeaderButton,
  TextButton,
  Input,
  Divider,
  DeleteUserText,
};
