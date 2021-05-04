import styled from 'styled-components';
import { SafeAreaView, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { fonts, metrics } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const Container = styled(SafeAreaView)`
  margin-bottom: ${() => `${metrics.BottomTabHeight + 35}px`};
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

const NotFoundTitle = styled.Text`
  font-size: ${() => `${fonts.titleSize}px`};
  font-family: ${() => fonts.bold};
  color: ${({ color }) => color};
  align-self: center;
  margin-top: 20px;
  padding: ${() => `15px ${paddingHorizontal}px 15px ${paddingHorizontal}px`};
`;

const NoFoundEssenceText = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
  align-self: center;
  text-align: center;
  padding: ${() => `15px ${paddingHorizontal}px 15px ${paddingHorizontal}px`};
`;

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export {
  Container,
  Input,
  InputContainer,
  Icon,
  ImageContainer,
  NoFoundEssenceText,
  NotFoundTitle,
};
