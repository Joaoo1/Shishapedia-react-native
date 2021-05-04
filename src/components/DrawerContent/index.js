import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import InAppReview from 'react-native-in-app-review';

import { useAuth } from '../../hooks/auth';

import { Container, Header, Divider, Email, Name } from './styles';
import { useTheme } from '../../hooks/theme';

const DrawerContent = () => {
  const { colors } = useTheme();
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
      <Container backgroundColor={colors.white}>
        <DrawerContentScrollView>
          <Header>
            <Icon name="account-circle" size={80} color="white" />
            <TouchableOpacity onPress={handleLogin}>
              <Name>{user?.name || 'Fazer login'}</Name>
            </TouchableOpacity>
            <Email>{user?.email}</Email>
          </Header>

          <Container>
            <DrawerItem
              icon={({ size }) => (
                <Icon name="person" size={size} color={colors.text} />
              )}
              label="Perfil"
              onPress={onProfileItemPress}
              labelStyle={{ color: colors.text }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon name="settings" size={size} color={colors.text} />
              )}
              label="Configurações"
              onPress={() => {}}
              labelStyle={{ color: colors.text }}
            />
            <Divider />
            <DrawerItem
              icon={({ size }) => (
                <Icon name="feedback" size={size} color={colors.text} />
              )}
              label="Deixe um feedback"
              onPress={onFeedbackItemPress}
              labelStyle={{ color: colors.text }}
            />
            <DrawerItem
              icon={({ size }) => (
                <MaterialIcon
                  name="google-play"
                  size={size}
                  color={colors.text}
                />
              )}
              label="Avalie o app"
              onPress={onReviewItemPress}
              labelStyle={{ color: colors.text }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon name="help" size={size} color={colors.text} />
              )}
              label="Ajuda"
              onPress={onHelpItemPress}
              labelStyle={{ color: colors.text }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon name="exit-to-app" size={size} color={colors.text} />
              )}
              label="Logout"
              onPress={signOut}
              labelStyle={{ color: colors.text }}
            />
          </Container>
        </DrawerContentScrollView>
      </Container>
    </>
  );
};

export default DrawerContent;
