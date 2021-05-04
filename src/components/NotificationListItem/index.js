import { ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import crashlytics from '@react-native-firebase/crashlytics';

import SwipeableListItem from '../SwipeableListItem';
import api from '../../services/api';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  ListItem,
  HeadContainer,
  Divider,
  InfoContainer,
  NotificationDate,
  NotificationMessage,
  NotificationTitle,
} from './styles';

const propTypes = {
  notification: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  onItemPress: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const NotificationListItem = ({ notification, idx, onItemPress, onDelete }) => {
  const { colors } = useTheme();

  async function handleDeleteNotification() {
    try {
      await api.delete(`/notifications/${notification.id}`);
      onDelete();
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show('Erro ao excluir notificação', ToastAndroid.SHORT);
    }
  }

  return (
    <SwipeableListItem
      key={notification.id}
      onSwipeableOpen={handleDeleteNotification}
    >
      <Container
        backgroundColor={
          notification.read ? colors.white : colors.unreadNotification
        }
        onTouchEnd={() => onItemPress(notification, idx)}
      >
        <ListItem>
          <Icon
            name="message-square"
            size={30}
            color="#adadad"
            style={{ marginRight: 20 }}
          />
          <InfoContainer>
            <HeadContainer>
              <NotificationTitle color={colors.text}>
                {notification.title}
              </NotificationTitle>
              <NotificationDate color={colors.text}>
                {notification.date}
              </NotificationDate>
            </HeadContainer>
            <NotificationMessage color={colors.text}>
              {`${notification.message.substring(0, 30)}...`}
            </NotificationMessage>
          </InfoContainer>
        </ListItem>
        <Divider color={colors.listDivider} />
      </Container>
    </SwipeableListItem>
  );
};

NotificationListItem.propTypes = propTypes;

export default NotificationListItem;
