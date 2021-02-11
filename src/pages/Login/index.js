import {
  Text,
  SafeAreaView,
  TextInput,
  Linking,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useEffect, useRef, useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { useAuth } from '../../hooks/auth';
import GetUrlParams from '../../helpers/GetUrlParams';
import GoogleIcon from '../../assets/icons/google-icon.svg';
import api from '../../services/api';

import { colors } from '../../styles';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const passwordInputRef = useRef(null);

  function handleGoogleButtonPress() {
    setLoading(true);
    Linking.openURL('http://shishapedia.pagekite.me/auth/google');
  }

  function handleFacebookButtonPress() {
    setLoading(true);
    Linking.openURL('http://shishapedia.pagekite.me/auth/facebook');
  }

  function handleCreateAccountButtonPress() {
    navigation.navigate('CreateUser');
  }

  async function handleEmailButtonPress() {
    if (email === '' || password === '') {
      ToastAndroid.show('Informe email e senha!', ToastAndroid.SHORT);
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/auth/email', {
        email,
        password,
      });

      const { id, token } = response.data;

      await signIn({ id, token });

      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'DrawerNavigation' }],
        }),
      );
    } catch (error) {
      if (error.response) {
        ToastAndroid.show(error.response.data.error, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Ocorreu um erro!', ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPasswordPress() {
    navigation.navigate('ForgotPassword');
  }

  async function handleOpenURL({ url }) {
    try {
      await signIn(GetUrlParams(url));

      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'DrawerNavigation' }],
        }),
      );
    } catch (err) {
      ToastAndroid.show('Error on login', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    Linking.addEventListener('url', handleOpenURL);

    return function cleanup() {
      Linking.removeAllListeners('url');
    };
  }, []);

  return (
    <>
      <ActivityIndicator
        style={styles.loading}
        size="large"
        animating={isLoading}
        color={colors.accentColor}
      />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Shishapedia</Text>
        <RectButton
          style={styles.googleButton}
          onPress={handleGoogleButtonPress}
        >
          <GoogleIcon />
          <Text style={styles.googleButtonText}>Entrar com Google</Text>
        </RectButton>
        <RectButton
          style={styles.facebookButton}
          onPress={handleFacebookButtonPress}
        >
          <EvilIcons name="sc-facebook" color="#fff" size={24} />
          <Text style={styles.facebookButtonText}>Entrar com Facebook</Text>
        </RectButton>

        <Text style={styles.orText}>Ou</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#c1bccc"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={() => passwordInputRef.current.focus()}
        />
        <TextInput
          ref={passwordInputRef}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#c1bccc"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={handleEmailButtonPress}
        />
        <Text
          style={styles.forgotPasswordText}
          onPress={handleForgotPasswordPress}
        >
          Esqueceu sua senha?
        </Text>
        <RectButton style={styles.button} onPress={handleEmailButtonPress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>

        <Text
          style={styles.createAccountText}
          onPress={handleCreateAccountButtonPress}
        >
          Crie uma conta
        </Text>
      </SafeAreaView>
    </>
  );
};

export default Login;
