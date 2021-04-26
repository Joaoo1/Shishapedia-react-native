import { createContext, useState, useContext, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import { useAuth } from './auth';
import api from '../services/api';

const NotificationContext = createContext({});

const NotificationProvider = ({ children }) => {
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  const { user, loading: loadingUser } = useAuth();

  async function loadNotifications() {
    try {
      const response = await api.get('/unread_notifications');
      setUnreadNotifications(response.data.notifications);
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show(
        'Ocorreu um erro ao carregar notificações',
        ToastAndroid.LONG,
      );
    }
  }

  const refreshNotifications = () => {
    if (loadingUser != null && !loadingUser) {
      if (user?.id) {
        loadNotifications();
      } else {
        setUnreadNotifications(0);
      }
    }
  };

  useEffect(() => {
    refreshNotifications();
  }, [loadingUser]);

  const setRead = () => {
    setUnreadNotifications(unreadNotifications - 1);
  };

  return (
    <NotificationContext.Provider
      value={{
        unreadNotifications,
        setRead,
        refreshNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

function useNotifications() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      'useNotifications must be used within an NotificationProvider',
    );
  }

  return context;
}

export { NotificationProvider, useNotifications };
