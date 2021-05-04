import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

import { fonts, metrics } from '../../styles';

const paddingHorizontal = metrics.screenHorizontalPadding;

const HeaderContainer = styled.View`
  z-index: -1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
`;

const HeaderRect = styled.View`
  z-index: -2;
  right: 30px;
  top: -85px;
  width: 120%;
  height: 170px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-bottom-right-radius: 400px;
  border-bottom-left-radius: 80px;
  transform: rotate(-8deg);
`;

const Headline = styled.Text`
  font-family: ${() => fonts.bold};
  font-size: 30px;
  color: ${({ color }) => color};
  margin-bottom: 10px;
`;

const SubHeadline = styled.Text`
  font-family: ${() => fonts.light};
  color: ${({ color }) => color};
`;

const BaseButton = styled(RectButton)`
  min-width: 40%;
  max-height: 150px;
  flex: 1;
  margin: 8px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.View`
  padding: ${() => `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`};
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  margin-top: -30px;
`;

const EssenceButton = styled(BaseButton)`
  background-color: ${({ darkTheme }) => (darkTheme ? '#636262' : '#2481EF')};
`;

const NarguileButton = styled(BaseButton)`
  background-color: ${({ darkTheme }) => (darkTheme ? '#636262' : '#EF9224')};
`;

const MixButton = styled(BaseButton)`
  background-color: ${({ darkTheme }) => (darkTheme ? '#636262' : '#BA24EF')};
`;

const NewsButton = styled(BaseButton)`
  background-color: ${({ darkTheme }) => (darkTheme ? '#636262' : '#24EFBE')};
`;

const TextButton = styled.Text`
  color: ${({ color }) => color};
  font-family: ${() => fonts.regular};
  margin-top: 5px;
`;

export {
  HeaderContainer,
  HeaderRect,
  Headline,
  SubHeadline,
  ButtonsContainer,
  EssenceButton,
  NarguileButton,
  MixButton,
  NewsButton,
  TextButton,
};
