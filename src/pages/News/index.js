import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/DrawerPageHeader';
import { useNotifications } from '../../hooks/notifications';
import { useTheme } from '../../hooks/theme';

import NarguilesImg from '../../assets/illustrations/news_not_available.svg';
import { Container, Headline, Text } from './styles';

const News = ({ navigation }) => {
  const { refreshNotifications } = useNotifications();
  const { colors } = useTheme();

  useFocusEffect(() => {
    refreshNotifications();
  }, []);

  return (
    <>
      <PageHeader title="Notícias" drawerNavigation={navigation} />
      <ScrollView>
        <Container>
          <Headline color={colors.text}>Ops...</Headline>
          <Text color={colors.text}>
            Seção de notícias ainda não está disponível
          </Text>
          <NarguilesImg />
        </Container>
      </ScrollView>
    </>
  );
};

export default News;
