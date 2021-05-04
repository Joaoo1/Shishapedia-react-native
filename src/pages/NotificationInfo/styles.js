import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

import { metrics, fonts } from '../../styles';

const Container = styled(SafeAreaView)`
  padding: ${() => `${metrics.screenHorizontalPadding}px`};
`;

const HeadContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const NotificationTitle = styled.Text`
  font-size: ${() => `${fonts.bigSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
`;

const NotificationMessage = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.light};
  color: ${({ color }) => color};
  margin-top: 5px;
`;

const NotificationDate = styled.Text`
  font-size: ${() => `${fonts.regularSize}px`};
  font-family: ${() => fonts.regular};
  color: ${({ color }) => color};
`;

export {
  Container,
  HeadContainer,
  NotificationDate,
  NotificationMessage,
  NotificationTitle,
};
