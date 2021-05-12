import { useEffect, useRef, useState } from 'react';
import { ScrollView, Linking, ToastAndroid } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import crashlytics from '@react-native-firebase/crashlytics';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import GetUrlParams from '../../helpers/GetUrlParams';
import api from '../../services/api';
import LoadingIndicator from '../../components/LoadingIndicator';
import Input from '../../components/Input';

import GoogleIcon from '../../assets/icons/google-icon.svg';
import {
  Container,
  Headline,
  Button,
  ButtonText,
  GoogleButton,
  GoogleButtonText,
  FacebookButton,
  FacebookButtonText,
  OrText,
  ForgotPasswordText,
  CreateAccountText,
  ContinueWithoutLoginButton,
  ContinueWithoutLoginText,
} from './styles';

const Login = () => {
  const navigation = useNavigation();
  const { signIn, user } = useAuth();
  const { colors } = useTheme();

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
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <Container backgroundColor={colors.primaryColor}>
        <ScrollView>
          <Headline color={colors.whiteText}>Shishapedia</Headline>
          <GoogleButton onPress={handleGoogleButtonPress}>
            <GoogleIcon />
            <GoogleButtonText>Entrar com Google</GoogleButtonText>
          </GoogleButton>
          <FacebookButton onPress={handleFacebookButtonPress}>
            <EvilIcons name="sc-facebook" color="#fff" size={24} />
            <FacebookButtonText color={colors.whiteText}>
              Entrar com Facebook
            </FacebookButtonText>
          </FacebookButton>

          <OrText color={colors.whiteText}>Ou</OrText>

          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            onSubmitEditing={() => passwordInputRef.current.focus()}
          />
          <Input
            ref={passwordInputRef}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={handleEmailButtonPress}
          />
          <ForgotPasswordText
            color={colors.whiteText}
            onPress={handleForgotPasswordPress}
          >
            Esqueceu sua senha?
          </ForgotPasswordText>
          <Button
            backgroundColor={colors.buttonBackground}
            onPress={handleEmailButtonPress}
          >
            <ButtonText color={colors.buttonText}>Entrar</ButtonText>
          </Button>

          <CreateAccountText
            color={colors.whiteText}
            onPress={handleCreateAccountButtonPress}
          >
            Crie uma conta
          </CreateAccountText>
          <ContinueWithoutLoginButton
            color={colors.whiteText}
            onPress={handleContinueWithoutLogin}
          >
            <ContinueWithoutLoginText color={colors.whiteText}>
              Continuar sem fazer login
            </ContinueWithoutLoginText>
          </ContinueWithoutLoginButton>
        </ScrollView>
      </Container>
    </>
  );
};

export default Login;
