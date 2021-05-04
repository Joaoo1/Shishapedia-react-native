import { useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/SavePageHeader';
import LoadingIndicator from '../../components/LoadingIndicator';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import Logo from '../../assets/illustrations/small_logo.svg';
import {
  Container,
  ScrollView,
  HeaderContainer,
  LogoContainer,
  HeaderText,
  Input,
  Button,
  ButtonText,
  Description,
} from './styles';

const Help = ({ navigation }) => {
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
      await api.post('/help_requests', { message, user_id: user.id });
      ToastAndroid.show(
        'Pedido de ajuda enviado com sucesso!',
        ToastAndroid.SHORT,
      );
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

      <PageHeader title="Ajuda" navigation={navigation} />
      <Container>
        <ScrollView>
          <View>
            <HeaderContainer>
              <LogoContainer backgroundColor={colors.primaryColor}>
                <Logo />
              </LogoContainer>
              <HeaderText color={colors.text}>
                {
                  'Shishapedia - O guia do narguileiro \n 1.0.0 \n Desenvolvido por João Vitor da Silva'
                }
              </HeaderText>
            </HeaderContainer>
            <View>
              <Description color={colors.text}>
                Está passando por algum problema ou bug? Deixe uma mensagem
                descrevendo qual o problema e se necessário, entraremos em
                contato.
              </Description>
              <Input
                backgroundColor={colors.inputBackground}
                borderColor={colors.inputBorder}
                textColor={colors.text}
                style={{ textAlignVertical: 'top' }}
                placeholder="Escreva aqui sua mensagem"
                placeholderTextColor="#c1bccc"
                multiline
                value={message}
                onChangeText={(text) => setMessage(text)}
              />
              <Button
                backgroundColor={colors.buttonBackground}
                onPress={handleSubmitFeedbackPress}
              >
                <ButtonText color={colors.buttonText}>Enviar</ButtonText>
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default Help;
