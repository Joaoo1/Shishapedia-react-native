import { ScrollView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/DrawerPageHeader';
import { useNotifications } from '../../hooks/notifications';

import NarguilesImg from '../../assets/illustrations/news_not_available.svg';
import styles from './styles';

const News = ({ navigation }) => {
  const { refreshNotifications } = useNotifications();

  useFocusEffect(() => {
    refreshNotifications();
  }, []);

  return (
    <>
      <PageHeader title="Notícias" drawerNavigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headline}>Ops...</Text>
          <Text style={styles.text}>
            Seção de notícias ainda não está disponível
          </Text>
          <NarguilesImg />
        </View>
      </ScrollView>
    </>
  );
};

export default News;
