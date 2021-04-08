import { useRef, useEffect, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

import PageHeader from '../../components/SavePageHeader';
import Input from '../../components/Input';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import styles from './styles';
import { colors } from '../../styles';

const Profile = ({ navigation }) => {
  const formRef = useRef(null);
  const { user, signOut } = useAuth();
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
      {isLoading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          animating={isLoading}
          color={colors.accentColor}
        />
      )}

      <PageHeader
        title="Perfil"
        navigation={navigation}
        onSave={() => formRef.current.submitForm()}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Icon name="account-circle" size={140} color="#9B9B9B" />
            <RectButton style={styles.headerButton} onPress={handleUploadImage}>
              <Text style={styles.textButton}>Enviar foto</Text>
            </RectButton>
          </View>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nome</Text>
              <Input
                name="name"
                style={styles.input}
                placeholder="Digite seu nome"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <Input
                style={styles.input}
                name="email"
                placeholder="Digite um email"
                editable={!isOAuth}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Senha antiga</Text>
              <Input
                style={styles.input}
                name="old_password"
                placeholder="Digite sua senha atual"
                editable={!isOAuth}
                onSubmitEditing={() => passwordInputRef.current.focus()}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nova senha</Text>
              <Input
                style={styles.input}
                name="password"
                placeholder="Digite a nova senha"
                editable={!isOAuth}
                onSubmitEditing={() => confirmPasswordInputRef.current.focus()}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirmar senha</Text>
              <Input
                style={styles.input}
                name="confirm_password"
                placeholder="Confirme a nova senha"
                editable={!isOAuth}
              />
            </View>
            <View onTouchStart={handleDeleteUserPress}>
              <Text style={styles.deleteUserText}>Excluir usuário</Text>
            </View>
          </Form>
        </View>
      </ScrollView>
    </>
  );
};
export default Profile;
