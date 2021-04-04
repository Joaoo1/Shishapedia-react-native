import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import crashlytics from '@react-native-firebase/crashlytics';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const [token, userJson] = await AsyncStorage.multiGet([
          '@Shishapedia:userToken',
          '@Shishapedia:user',
        ]);

        if (token[1] && userJson[1]) {
          api.defaults.headers.authorization = `Bearer ${token[1]}`;
          const user = JSON.parse(userJson[1]);

          setData({ token: token[1], user });

          const fcmToken = await messaging().getToken();
          api.put('/remote_notifications', { fcm_token: fcmToken });
          await crashlytics().setUserId(user.id.toString());
        }
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show('Erro ao carregar usuário', ToastAndroid.SHORT);
      } finally {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ token }) => {
    api.defaults.headers.authorization = `Bearer ${token}`;

    try {
      const response = await api.get('/users');
      const user = response.data;
      await AsyncStorage.multiSet([
        ['@Shishapedia:userToken', token],
        ['@Shishapedia:user', JSON.stringify(user)],
      ]);
      setData({ token, user: response.data });

      const fcmToken = await messaging().getToken();
      api.put('/remote_notifications', { fcm_token: fcmToken });
      await crashlytics().setUserId(user.id.toString());
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show('Erro ao carregar usuário', ToastAndroid.SHORT);
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@Shishapedia:user',
      '@Shishapedia:userToken',
    ]);

    const fcmToken = await messaging().getToken();
    api.delete('/remote_notifications', { fcm_token: fcmToken });

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
