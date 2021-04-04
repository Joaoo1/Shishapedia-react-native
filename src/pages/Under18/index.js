import { useEffect } from 'react';
import { Text, SafeAreaView, ToastAndroid } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

import styles from './styles';

const Under18 = () => {
  const navigation = useNavigation();

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
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Shishapedia</Text>
        <Text style={styles.headline}>Você possui mais de 18 anos?</Text>
        <RectButton style={styles.button} onPress={onYesPress}>
          <Text style={styles.buttonText}>SIM</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={onNoPress}>
          <Text style={styles.buttonText}>NÃO</Text>
        </RectButton>
        <Text style={styles.text}>
          AVISO: Tabaco contém nicotina. Fumar é prejudicial a saúde e pode
          causar dependência. Aplicativo PROIBIDO PARA MENORES DE 18 ANOS.
        </Text>
      </SafeAreaView>
    </>
  );
};

export default Under18;
