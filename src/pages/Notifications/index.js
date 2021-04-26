import { useState, useEffect } from 'react';
import {
  Text,
  ToastAndroid,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/DrawerPageHeader';
import NotificationListItem from '../../components/NotificationListItem';
import { useNotifications } from '../../hooks/notifications';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { FormatDate } from '../../helpers/FormatDate';

import NoNotificationsImg from '../../assets/illustrations/no_notifications.svg';
import styles from './styles';
import { colors } from '../../styles';

const Notifications = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();
  const { refreshNotifications } = useNotifications();

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

  function handleNotificationDelete(idx) {
    const newList = [...notificationList];
    newList.splice(idx, 1);
    setNotificationList([...newList]);
    refreshNotifications();
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
      <NotificationListItem
        key={notification.id}
        notification={notification}
        idx={idx}
        onItemPress={handleItemPress}
        onDelete={() => handleNotificationDelete(idx)}
      />
    ));
  }

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          animating={isLoading}
          color={colors.accentColor}
        />
      )}

      <PageHeader notifications={false} backButton title="Notificações" />
      {!user || !user.id ? (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Faça login para receber notificações</Text>
        </SafeAreaView>
      ) : (
        <ScrollView>{renderNotificationList()}</ScrollView>
      )}
    </>
  );
};

export default Notifications;
