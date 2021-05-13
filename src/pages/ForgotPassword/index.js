import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';

import LoadingIndicator from '../../components/LoadingIndicator';
import PageHeader from '../../components/SavePageHeader';
import Input from '../../components/Input';
import api from '../../services/api';

import { Container, Button, Text } from './styles';
import { useTheme } from '../../hooks/theme';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function handleButtonPress() {
    if (email === '') {
      ToastAndroid.show('Informe um email', ToastAndroid.SHORT);
      return;
    }

    // Validate the email with regex
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email))) {
      ToastAndroid.show('Informe um email válido', ToastAndroid.SHORT);
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/recover_password', { email });
      ToastAndroid.show(response.data.message, ToastAndroid.LONG);
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        ToastAndroid.show(err.response.data.error, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(
          'Ocorreu um erro ao recuperar senha',
          ToastAndroid.SHORT,
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader title="Resetar senha" navigation={navigation} />
      <Container backgroundColor={colors.primaryColor}>
        <Text color={colors.whiteText}>
          Informe qual o seu email e será enviado um link para resetar sua
          senha.
        </Text>
        <Input
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          onSubmitEditing={handleButtonPress}
        />

        <Button
          backgroundColor={colors.buttonBackground}
          onPress={handleButtonPress}
          text="Resetar senha"
        />
      </Container>
    </>
  );
};

export default ForgotPassword;
