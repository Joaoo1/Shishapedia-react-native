import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ToastAndroid } from 'react-native';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const [token, user] = await AsyncStorage.multiGet([
          '@Shishapedia:userToken',
          '@Shishapedia:user',
        ]);

        if (token[1] && user[1]) {
          api.defaults.headers.authorization = `Bearer ${token[1]}`;

          setData({ token: token[1], user: JSON.parse(user[1]) });
        }
      } catch (err) {
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
      await AsyncStorage.multiSet([
        ['@Shishapedia:userToken', token],
        ['@Shishapedia:user', JSON.stringify(response.data)],
      ]);
      setData({ token, user: response.data });
    } catch (err) {
      ToastAndroid.show('Erro ao carregar usuário', ToastAndroid.SHORT);
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@Shishapedia:user',
      '@Shishapedia:userToken',
    ]);

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
