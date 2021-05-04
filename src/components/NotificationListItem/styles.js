import styled from 'styled-components';

import { metrics, fonts } from '../../styles';

const horizontalPadding = metrics.screenHorizontalPadding;

const Container = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${() => `15px ${horizontalPadding}px 15px ${horizontalPadding}px`};
`;

const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`;

const HeadContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const NotificationTitle = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
`;

const NotificationDate = styled.Text`
  font-size: ${() => `${fonts.regularSize - 1}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
`;

const NotificationMessage = styled.Text`
  font-size: ${() => `${fonts.tinySize}px`};
  font-family: ${() => fonts.light};
  color: ${({ color }) => color};
`;

const Divider = styled.View`
  margin-top: 15px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ color }) => color};
`;

const InfoContainer = styled.View`
  flex: 1;
`;

export {
  Container,
  ListItem,
  HeadContainer,
  Divider,
  InfoContainer,
  NotificationDate,
  NotificationMessage,
  NotificationTitle,
};
