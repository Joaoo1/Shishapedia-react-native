import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PageHeader from '../../components/DrawerPageHeader';

import NarguilesImg from '../../assets/images/narguiles.png';
import styles from './styles';

const Narguiles = ({ navigation }) => (
  <>
    <PageHeader title="Narguiles" drawerNavigation={navigation} />
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Em breve começaremos a adicionar narguiles
      </Text>
      <Image source={NarguilesImg} />
    </SafeAreaView>
  </>
);

export default Narguiles;
