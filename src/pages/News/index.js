import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import PageHeader from '../../components/DrawerPageHeader';
import NarguilesImg from '../../assets/illustrations/news_not_available.svg';

import styles from './styles';

const News = ({ navigation }) => (
  <>
    <PageHeader title="Notícias" drawerNavigation={navigation} />
    <SafeAreaView style={styles.container}>
      <Text style={styles.headline}>Ops...</Text>
      <Text style={styles.text}>
        Seção de notícias ainda não está disponível
      </Text>
      <NarguilesImg />
    </SafeAreaView>
  </>
);

export default News;
