import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/SavePageHeader';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { colors } from '../../styles';
import styles from './styles';

const Feedback = ({ navigation }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function handleSubmitFeedbackPress() {
    if (message === '') {
      ToastAndroid.show('Digite uma mensagem', ToastAndroid.SHORT);
      return;
    }

    try {
      setLoading(true);
      await api.post('/feedbacks', { message, user_id: user.id });
      ToastAndroid.show('Feedback enviado com sucesso!', ToastAndroid.SHORT);
      setMessage('');
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        ToastAndroid.show(err.response.error, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Ocorreu um erro', ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
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

      <PageHeader title="Feedback" navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.description}>
            Tem alguma sugestão ou ideia sensacional para o aplicativo ?
            Compartilhe-a conosco, nós também queremos saber! Reclamações e
            críticas também serão muito bem-vindas.
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Escreva aqui sua mensagem"
              placeholderTextColor="#c1bccc"
              multiline
              value={message}
              onChangeText={(text) => setMessage(text)}
            />
          </View>
          <RectButton style={styles.button} onPress={handleSubmitFeedbackPress}>
            <Text style={styles.buttonText}>Enviar</Text>
          </RectButton>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Caso prefira, pode enviar um email para shishapedia@outlook.com
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Feedback;
