import { useCallback } from 'react';
import { SafeAreaView, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PageHeader from '../../components/DrawerPageHeader';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import { useNotifications } from '../../hooks/notifications';

import NarguileIcon from '../../assets/icons/Narguile';
import EssenceIcon from '../../assets/icons/Essence';
import NewsIcon from '../../assets/icons/News';
import {
  HeaderContainer,
  HeaderRect,
  Headline,
  SubHeadline,
  ButtonsContainer,
  EssenceButton,
  NarguileButton,
  MixButton,
  NewsButton,
  TextButton,
} from './styles';

const Home = ({ navigation }) => {
  const { user } = useAuth();
  const { refreshNotifications } = useNotifications();

  const { colors, isDarkTheme } = useTheme();

  useFocusEffect(
    useCallback(() => {
      refreshNotifications();
      const handleBackButton = () => {
        BackHandler.exitApp();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackButton,
      );

      return () => backHandler.remove();
    }, []),
  );

  function handleEssencesButtonPress() {
    navigation.navigate('EssenceBrands');
  }

  function handleMixesButtonPress() {
    navigation.navigate('MixesCategories');
  }

  function handleNarguilesButtonPress() {
    navigation.navigate('Narguiles');
  }

  function handleNewsButtonPress() {
    navigation.navigate('News');
  }
  return (
    <>
      <PageHeader title="" drawerNavigation={navigation} toggleTheme />
      <SafeAreaView>
        <HeaderContainer backgroundColor={colors.primaryColor}>
          <Headline color={colors.whiteText}>
            Bem vindo,
            {user ? `\n${user.name}` : '\nNarguileiro'}
          </Headline>
          <SubHeadline color={colors.whiteText}>
            Você está em um guia completo feito para os narguileiros de todo o
            mundo.
          </SubHeadline>
        </HeaderContainer>
        <HeaderRect backgroundColor={colors.primaryColor} />

        <ButtonsContainer>
          <EssenceButton
            darkTheme={isDarkTheme}
            onPress={handleEssencesButtonPress}
          >
            <EssenceIcon />
            <TextButton color={colors.whiteText}>Essências</TextButton>
          </EssenceButton>
          <NarguileButton
            darkTheme={isDarkTheme}
            onPress={handleNarguilesButtonPress}
          >
            <NarguileIcon />
            <TextButton color={colors.whiteText}>Narguiles</TextButton>
          </NarguileButton>
          <MixButton darkTheme={isDarkTheme} onPress={handleMixesButtonPress}>
            <Icon name="favorite" color="white" size={60} />
            <TextButton color={colors.whiteText}>Mixes</TextButton>
          </MixButton>
          <NewsButton darkTheme={isDarkTheme} onPress={handleNewsButtonPress}>
            <NewsIcon />
            <TextButton color={colors.whiteText}>Notícias</TextButton>
          </NewsButton>
        </ButtonsContainer>
      </SafeAreaView>
    </>
  );
};

export default Home;
