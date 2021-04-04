import { useState, useEffect } from 'react';
import { Text, ToastAndroid, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/DrawerPageHeader';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { FormatDate } from '../../helpers/FormatDate';

import NoNotificationsImg from '../../assets/illustrations/no_notifications.svg';
import styles from './styles';
import { colors } from '../../styles';

const Notifications = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  const [notificationList, setNotificationList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await api.get('/notifications');

        const list = response.data.notifications.map((ntf) => ({
          ...ntf,
          date: FormatDate(ntf.created_at),
        }));

        setNotificationList(list);
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show(
          'Ocorreu um erro ao carregar notificações',
          ToastAndroid.LONG,
        );
      } finally {
        setLoading(false);
      }
    }

    if (user && user.id) {
      fetchNotifications();
    } else {
      setNotificationList([]);
      setLoading(false);
    }
  }, []);

  function handleItemPress(notification, idx) {
    navigate('NotificationInfo', { notification });
    const newList = [...notificationList];
    newList[idx] = { ...notificationList[idx], read: true };
    setNotificationList(newList);
  }

  function renderNotificationList() {
    if (notificationList.length === 0 && !isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Não há novas notificações</Text>
          <NoNotificationsImg />
        </View>
      );
    }

    return notificationList.map((notification, idx) => (
      <View
        key={notification.id}
        style={!notification.read ? styles.unread : styles.read}
        onTouchStart={() => handleItemPress(notification, idx)}
      >
        <View style={styles.listItem}>
          <View style={styles.headContainer}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDate}>{notification.date}</Text>
          </View>
          <Text style={styles.notificationMessage}>
            {`${notification.message.substring(0, 35)}...`}
          </Text>
          <View style={styles.divider} />
        </View>
      </View>
    ));
  }

  return (
    <>
      <PageHeader notifications={false} backButton title="Notificações" />

      <ActivityIndicator
        style={styles.loading}
        size="large"
        animating={isLoading}
        color={colors.accentColor}
      />
      {!user || !user.id ? (
        <View style={styles.container}>
          <Text style={styles.text}>Faça login para receber notificações</Text>
        </View>
      ) : (
        <ScrollView>{renderNotificationList()}</ScrollView>
      )}
    </>
  );
};

export default Notifications;
