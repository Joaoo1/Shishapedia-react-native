import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  TextInput,
  View,
  ToastAndroid,
  Text,
  ActivityIndicator,
} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/SavePageHeader';
import api from '../../services/api';

import { colors } from '../../styles';
import styles from './styles';

const ForgotPassword = () => {
  const navigation = useNavigation();

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
      const response = await api.post('/recover', { email });
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
      <PageHeader title="Resetar senha" navigation={navigation} />
      <ActivityIndicator
        style={styles.loading}
        size="large"
        animating={isLoading}
        color={colors.accentColor}
      />
      <View style={styles.container}>
        <Text style={styles.text}>
          Informe qual o seu email e será enviado um link para resetar sua
          senha.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#c1bccc"
          onChangeText={(text) => setEmail(text)}
          value={email}
          onSubmitEditing={handleButtonPress}
        />

        <RectButton style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Resetar senha</Text>
        </RectButton>
      </View>
    </>
  );
};

export default ForgotPassword;
