import { useEffect } from 'react';
import { Text, View } from 'react-native';

import PageHeader from '../../components/DrawerPageHeader';
import { useNotifications } from '../../hooks/notifications';
import api from '../../services/api';

import styles from './styles';

const Notifications = ({ route }) => {
  const { notification } = route.params;
  const { setRead } = useNotifications();

  useEffect(() => {
    if (!notification.read) {
      api.put('/notifications', { id: notification.id, read: true });
      setRead();
    }
  }, []);

  return (
    <>
      <PageHeader notifications={false} backButton title="Notificações" />
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationDate}>{notification.date}</Text>
        </View>
        <Text style={styles.notificationMessage}>{notification.message}</Text>
      </View>
    </>
  );
};

export default Notifications;
