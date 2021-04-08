import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import InAppReview from 'react-native-in-app-review';

import { useAuth } from '../../hooks/auth';
import DrawerHeader from '../DrawerHeader';

import styles from './styles';

const DrawerContent = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  function handleLogin() {
    if (!user) {
      navigation.navigate('Login');
    }
  }

  function onProfileItemPress() {
    if (!user) {
      ToastAndroid.show(
        'Faça login primeiro para poder editar o seu perfil',
        ToastAndroid.SHORT,
      );
      return;
    }

    navigation.navigate('Profile');
  }

  function onFeedbackItemPress() {
    navigation.navigate('Feedback');
  }

  function onHelpItemPress() {
    navigation.navigate('Help');
  }

  function onReviewItemPress() {
    InAppReview.RequestInAppReview().then((hasFinished) => {
      if (hasFinished) {
        ToastAndroid.show('Obrigado pela avaliação!', ToastAndroid.SHORT);
      }
    });
  }

  return (
    <>
      <View style={styles.container}>
        <DrawerContentScrollView>
          <DrawerHeader style={styles.header}>
            <Icon name="account-circle" size={80} color="#fff" />
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.name}>
                {user ? user.name : 'Fazer login'}
              </Text>
            </TouchableOpacity>
            <Text style={styles.email}>{user && user.email}</Text>
          </DrawerHeader>

          <View style={styles.container}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="person" size={size} color={color} />
              )}
              label="Perfil"
              onPress={onProfileItemPress}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings" size={size} color={color} />
              )}
              label="Configurações"
              onPress={() => {}}
            />
            <View style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="feedback" size={size} color={color} />
              )}
              label="Deixe um feedback"
              onPress={onFeedbackItemPress}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcon name="google-play" size={size} color={color} />
              )}
              label="Avalie o app"
              onPress={onReviewItemPress}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="help" size={size} color={color} />
              )}
              label="Ajuda"
              onPress={onHelpItemPress}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="exit-to-app" size={size} color={color} />
              )}
              label="Logout"
              onPress={signOut}
            />
          </View>
        </DrawerContentScrollView>
      </View>
    </>
  );
};

export default DrawerContent;
