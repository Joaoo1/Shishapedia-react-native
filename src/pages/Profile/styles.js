import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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

const Divider = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ color }) => color};
  margin: 25px 0 5px 0;
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
  Divider,
  DeleteUserText,
};
