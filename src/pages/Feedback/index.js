import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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
      <PageHeader title="Feedback" navigation={navigation} />
      <View style={styles.container}>
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
            Caso prefira, pode enviar um email para silva.joao1@outlook.com.br
          </Text>
        </View>
      </View>

      <ActivityIndicator
        size="large"
        color={colors.accentColor}
        animating={isLoading}
        style={styles.loading}
      />
    </>
  );
};

export default Feedback;
