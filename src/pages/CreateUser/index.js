import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  ToastAndroid,
  Text,
  ActivityIndicator,
} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import { RectButton } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';

import PageHeader from '../../components/SavePageHeader';
import TextInput from '../../components/Input';
import api from '../../services/api';

import { colors } from '../../styles';
import styles from './styles';

const CreateUser = () => {
  const navigation = useNavigation();
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
      {isLoading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          animating={isLoading}
          color={colors.accentColor}
        />
      )}

      <PageHeader title="Criar conta" navigation={navigation} />
      <ScrollView style={styles.container}>
        <Form ref={form} onSubmit={handleFormSubmit}>
          <TextInput style={styles.input} name="name" placeholder="Nome" />
          <TextInput style={styles.input} placeholder="E-mail" name="email" />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            name="password"
            secureTextEntry
          />
          <Text style={styles.passwordRequirements}>
            Senha precisa conter letras maiúsculas, minúsculas, números e no
            minímo 8 digítos.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            name="confirm_password"
            secureTextEntry
            onSubmitEditing={() => form.current.submitForm()}
          />

          <RectButton style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Criar</Text>
          </RectButton>
        </Form>
      </ScrollView>
    </>
  );
};

export default CreateUser;
