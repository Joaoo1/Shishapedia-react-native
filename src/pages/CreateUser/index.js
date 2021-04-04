import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  TextInput,
  ScrollView,
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

const CreateUser = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  async function handleButtonPress() {
    if (email === '') {
      ToastAndroid.show('Preencha o campo email', ToastAndroid.SHORT);
      return;
    }

    if (password === '') {
      ToastAndroid.show('Preencha o campo senha', ToastAndroid.SHORT);
      return;
    }

    if (confirmPassword !== password) {
      ToastAndroid.show('As senhas não conferem', ToastAndroid.SHORT);
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
      await api.post('/users', { name, email, password });
      ToastAndroid.show('Conta cadastrada com sucesso!', ToastAndroid.SHORT);
      navigation.goBack();
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        ToastAndroid.show(err.response.data.error, ToastAndroid.SHORT);
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
      <PageHeader title="Criar conta" navigation={navigation} />
      <ActivityIndicator
        style={styles.loading}
        size="large"
        animating={isLoading}
        color={colors.accentColor}
      />
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#c1bccc"
          onChangeText={(text) => setName(text)}
          value={name}
          onSubmitEditing={() => emailInputRef.current.focus()}
        />
        <TextInput
          ref={emailInputRef}
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#c1bccc"
          onChangeText={(text) => setEmail(text)}
          value={email}
          onSubmitEditing={() => passwordInputRef.current.focus()}
        />
        <TextInput
          ref={passwordInputRef}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
          onSubmitEditing={() => confirmPasswordInputRef.current.focus()}
        />
        <TextInput
          ref={confirmPasswordInputRef}
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          onSubmitEditing={handleButtonPress}
        />

        <RectButton style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </ScrollView>
    </>
  );
};

export default CreateUser;
