import { Text, View, BackHandler } from 'react-native';
import Logo from '../../assets/illustrations/Logo.svg';

import styles from './styles';

const Unallowed = () => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp();
    return true;
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Shishapedia</Text>
        <View>
          <Text style={styles.headline}>PROIBIDO</Text>
          <Text style={styles.text}>
            Infelizmente você não pode utilizar esse aplicativo por ser menor da
            idade.
          </Text>
        </View>
        <View style={styles.logo}>
          <Logo />
          <Text style={styles.text}>2020 ©</Text>
        </View>
      </View>
    </>
  );
};

export default Unallowed;
