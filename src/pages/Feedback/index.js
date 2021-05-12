import { useState } from 'react';
import { ToastAndroid, View } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import LoadingIndicator from '../../components/LoadingIndicator';
import PageHeader from '../../components/SavePageHeader';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Input,
  Description,
  Button,
  ButtonText,
  FooterContainer,
  FooterText,
} from './styles';

const Feedback = ({ navigation }) => {
  const { user } = useAuth();
  const { colors } = useTheme();

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
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader title="Feedback" navigation={navigation} />
      <Container>
        <View>
          <Description color={colors.text}>
            Tem alguma sugestão ou ideia sensacional para o aplicativo ?
            Compartilhe-a conosco, nós também queremos saber! Reclamações e
            críticas também serão muito bem-vindas.
          </Description>
          <Input
            placeholder="Escreva aqui sua mensagem"
            multiline
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={{ textAlignVertical: 'top' }}
          />
          <Button
            backgroundColor={colors.buttonBackground}
            onPress={handleSubmitFeedbackPress}
          >
            <ButtonText color={colors.buttonText}>Enviar</ButtonText>
          </Button>
        </View>
        <FooterContainer>
          <FooterText color={colors.text}>
            Caso prefira, pode enviar um email para shishapedia@outlook.com
          </FooterText>
        </FooterContainer>
      </Container>
    </>
  );
};

export default Feedback;
