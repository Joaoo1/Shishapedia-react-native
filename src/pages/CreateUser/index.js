import { useState, useRef } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import { Form } from '@unform/mobile';

import PageHeader from '../../components/SavePageHeader';
import LoadingIndicator from '../../components/LoadingIndicator';
import Input from '../../components/FormInput';
import api from '../../services/api';
import { useTheme } from '../../hooks/theme';

import { Container, Button, ButtonText, PasswordRequirements } from './styles';

const CreateUser = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [isLoading, setLoading] = useState(false);
  const form = useRef(null);

  async function handleFormSubmit() {
    const data = form.current.getData();

    try {
      setLoading(true);
      await api.post('/users', data);
      ToastAndroid.show('Conta cadastrada com sucesso!', ToastAndroid.SHORT);
      navigation.goBack();
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        if (err.response.data.errors) {
          form.current.setErrors(err.response.data.errors);
        } else {
          ToastAndroid.show(err.response.data.error, ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show(
          'Ocorreu um erro ao cadastrar conta',
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

      <PageHeader title="Criar conta" navigation={navigation} />
      <Container backgroundColor={colors.primaryColor}>
        <Form ref={form} onSubmit={handleFormSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input placeholder="E-mail" name="email" />
          <Input placeholder="Senha" name="password" secureTextEntry />
          <PasswordRequirements>
            Senha precisa conter letras maiúsculas, minúsculas, números e no
            minímo 8 digítos.
          </PasswordRequirements>
          <Input
            placeholder="Confirmar Senha"
            name="confirm_password"
            secureTextEntry
            onSubmitEditing={() => form.current.submitForm()}
          />

          <Button
            backgroundColor={colors.buttonBackground}
            onPress={handleFormSubmit}
          >
            <ButtonText color={colors.buttonText}>Criar</ButtonText>
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CreateUser;
