import { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

import { useTheme } from '../../hooks/theme';

import { Container, Button, Title, Headline, Text } from './styles';

const Under18 = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  async function onYesPress() {
    // Reset the stack to exit app when back button is pressed on Home screen
    await AsyncStorage.setItem('@Shishapedia/UnderAge', 'false');
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Login' }],
      }),
    );
  }
  function onNoPress() {
    navigation.navigate('Unallowed');
    AsyncStorage.setItem('@Shishapedia/UnderAge', 'true');
  }

  useEffect(() => {
    async function fetchInitialRoute() {
      try {
        const [underAge, user] = await AsyncStorage.multiGet([
          '@Shishapedia/UnderAge',
          '@Shishapedia:user',
          // '@Shishapedia/DarkTheme',
        ]);

        if (underAge[1] !== null) {
          if (underAge[1] === 'true') {
            navigation.navigate('Unallowed');
          } else if (underAge[1] === 'false') {
            if (user[1]) {
              navigation.navigate('DrawerNavigation');
            } else {
              onYesPress();
            }
          }
        }
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show('Ocorreu um erro', ToastAndroid.SHORT);
      }
    }

    fetchInitialRoute();
  }, []);

  return (
    <>
      <Container backgroundColor={colors.primaryColor}>
        <Title color={colors.whiteText}>Shishapedia</Title>
        <Headline color={colors.whiteText}>
          Você possui mais de 18 anos?
        </Headline>
        <Button text="SIM" onPress={onYesPress} />
        <Button text="NÃO" onPress={onNoPress} />
        <Text color={colors.whiteText}>
          AVISO: Tabaco contém nicotina. Fumar é prejudicial a saúde e pode
          causar dependência. Aplicativo PROIBIDO PARA MENORES DE 18 ANOS.
        </Text>
      </Container>
    </>
  );
};

export default Under18;
