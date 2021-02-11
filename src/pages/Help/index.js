import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/SavePageHeader';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Logo from '../../assets/illustrations/small_logo.svg';
import styles from './styles';
import { colors } from '../../styles';

const Help = ({ navigation }) => {
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
      await api.post('/help_requests', { message, user_id: user.id });
      ToastAndroid.show(
        'Pedido de ajuda enviado com sucesso!',
        ToastAndroid.SHORT,
      );
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
      <PageHeader title="Ajuda" navigation={navigation} />

      <ScrollView>
        <ActivityIndicator
          size="large"
          color={colors.accentColor}
          animating={isLoading}
          style={styles.loading}
        />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.logo}>
              <Logo />
            </View>
            <Text style={styles.headerText}>
              Shishapedia - O guia do narguileiro
            </Text>
            <Text style={styles.headerText}>1.0.0</Text>
            <Text style={styles.headerText}>
              Desenvolvido por João Vitor da Silva
            </Text>
          </View>
          <View>
            <Text style={styles.description}>
              Está passando por algum problema ou bug? Deixe uma mensagem
              descrevendo qual o problema e se necessário, entraremos em
              contato.
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
            <RectButton
              style={styles.button}
              onPress={handleSubmitFeedbackPress}
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Help;
