import { View, Text, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import crashlytics from '@react-native-firebase/crashlytics';

import SwipeableListItem from '../SwipeableListItem';
import styles from './styles';
import api from '../../services/api';

const propTypes = {
  notification: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  onItemPress: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const NotificationListItem = ({ notification, idx, onItemPress, onDelete }) => {
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
    <SwipeableListItem onSwipeableOpen={handleDeleteNotification}>
      <View
        key={notification.id}
        style={!notification.read ? styles.unread : styles.read}
        onTouchEnd={() => onItemPress(notification, idx)}
      >
        <View style={styles.listItem}>
          <Icon
            name="message-square"
            style={styles.icon}
            size={30}
            color="#adadad"
          />
          <View style={styles.infoContainer}>
            <View style={styles.headContainer}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationDate}>{notification.date}</Text>
            </View>
            <Text style={styles.notificationMessage}>
              {`${notification.message.substring(0, 30)}...`}
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </SwipeableListItem>
  );
};

NotificationListItem.propTypes = propTypes;

export default NotificationListItem;
