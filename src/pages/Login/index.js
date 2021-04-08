import { useEffect, useRef, useState } from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Linking,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import crashlytics from '@react-native-firebase/crashlytics';

import { useAuth } from '../../hooks/auth';
import GetUrlParams from '../../helpers/GetUrlParams';
import api from '../../services/api';

import GoogleIcon from '../../assets/icons/google-icon.svg';
import { colors } from '../../styles';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const { signIn, user } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const passwordInputRef = useRef(null);

  function navigateToHome() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'DrawerNavigation' }],
      }),
    );
  }
  function handleGoogleButtonPress() {
    Linking.openURL('https://api.shishapedia.com.br/auth/google');
  }

  function handleFacebookButtonPress() {
    Linking.openURL('https://api.shishapedia.com.br/auth/facebook');
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

      navigateToHome();
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show(
        err.response?.data?.err ?? 'Ocorreu um erro!',
        ToastAndroid.SHORT,
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPasswordPress() {
    navigation.navigate('ForgotPassword');
  }

  async function handleOpenURL({ url }) {
    try {
      setLoading(true);
      await signIn(GetUrlParams(url));

      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'DrawerNavigation' }],
        }),
      );
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show('Erro no login', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  }

  function handleContinueWithoutLogin() {
    navigateToHome();
  }

  useEffect(() => {
    if (user) {
      navigateToHome();
    }

    Linking.addEventListener('url', handleOpenURL);
    return function cleanup() {
      Linking.removeAllListeners('url');
    };
  }, []);

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
      <SafeAreaView style={styles.container}>
        <ScrollView>
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
            autoCapitalize="none"
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
          <TouchableOpacity
            style={styles.continueWithoutLoginButton}
            onPress={handleContinueWithoutLogin}
          >
            <Text style={styles.continueWithoutLoginText}>
              Continuar sem fazer login
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;
