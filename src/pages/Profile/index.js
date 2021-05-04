import { useRef, useEffect, useState } from 'react';
import { ToastAndroid, Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Form } from '@unform/mobile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/SavePageHeader';
import LoadingIndicator from '../../components/LoadingIndicator';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  HeaderContainer,
  HeaderButton,
  TextButton,
  Input,
  Divider,
  DeleteUserText,
} from './styles';

const Profile = ({ navigation }) => {
  const formRef = useRef(null);
  const { user, signOut } = useAuth();
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const [isLoading, setLoading] = useState(true);
  const [isOAuth, setOAuth] = useState(user && user.oauth);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get('/users');
        const { name, email, oauth } = response.data;
        formRef.current.setFieldValue('name', name);
        formRef.current.setFieldValue('email', email);
        setOAuth(oauth);
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show(
          'Erro ao carregar informações do usuário',
          ToastAndroid.SHORT,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  async function handleSubmit(formData) {
    try {
      setLoading(true);
      const data = {
        ...(formData.old_password !== '' && {
          old_password: formData.old_password,
        }),
        ...(formData.password !== '' && {
          password: formData.password,
        }),
        ...(formData.confirm_password !== '' && {
          confirm_password: formData.confirm_password,
        }),
        name: formData.name,
        email: formData.email,
      };
      const response = await api.put('/users', data);
      await AsyncStorage.setItem(
        '@Shishapedia:user',
        JSON.stringify(response.data),
      );
      ToastAndroid.show('Usúario atualizado com sucesso!', ToastAndroid.SHORT);
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        ToastAndroid.show(err.response.data.error, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Erro ao atualizar usúario', ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
  }

  function handleUploadImage() {
    ToastAndroid.show('Ainda não está disponível', ToastAndroid.SHORT);
  }

  async function deleteUser() {
    try {
      await api.delete('/users');
      signOut();
      goBack();
      ToastAndroid.show('Usuário excluido com sucesso :(', ToastAndroid.SHORT);
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        ToastAndroid.show(err.response.data.error, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Ocorreu um erro', ToastAndroid.SHORT);
      }
    }
  }

  function handleDeleteUserPress() {
    Alert.alert(
      'Excluir usuário',
      'Esta ação é irreversivel e o seu usuario estará perdido para todo o sempre! Deseja Continuar?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: deleteUser,
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  }

  return (
    <>
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader
        title="Perfil"
        navigation={navigation}
        onSave={() => formRef.current.submitForm()}
      />
      <Container>
        <HeaderContainer>
          <Icon name="account-circle" size={140} color="#9B9B9B" />
          <HeaderButton
            backgroundColor={colors.buttonBackground}
            onPress={handleUploadImage}
          >
            <TextButton color={colors.buttonText}>Enviar foto</TextButton>
          </HeaderButton>
        </HeaderContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Digite seu nome"
            label="Nome"
            backgroundColor={colors.inputBackground}
            borderColor={colors.inputBorder}
            textColor={colors.text}
          />
          <Input
            name="email"
            placeholder="Digite um email"
            editable={!isOAuth}
            label="E-mail"
            backgroundColor={colors.inputBackground}
            borderColor={colors.inputBorder}
            textColor={colors.text}
          />
          <Divider color={colors.divider} />
          <Input
            name="old_password"
            placeholder="Digite sua senha atual"
            editable={!isOAuth}
            onSubmitEditing={() => passwordInputRef.current.focus()}
            label="Senha antiga"
            backgroundColor={colors.inputBackground}
            borderColor={colors.inputBorder}
            textColor={colors.text}
          />
          <Input
            name="password"
            placeholder="Digite a nova senha"
            editable={!isOAuth}
            onSubmitEditing={() => confirmPasswordInputRef.current.focus()}
            label="Nova senha"
            backgroundColor={colors.inputBackground}
            borderColor={colors.inputBorder}
            textColor={colors.text}
          />
          <Input
            name="confirm_password"
            placeholder="Confirme a nova senha"
            editable={!isOAuth}
            label="Confirmar senha"
            backgroundColor={colors.inputBackground}
            borderColor={colors.inputBorder}
            textColor={colors.text}
          />
          <View onTouchStart={handleDeleteUserPress}>
            <DeleteUserText>Excluir usuário</DeleteUserText>
          </View>
        </Form>
      </Container>
    </>
  );
};
export default Profile;
