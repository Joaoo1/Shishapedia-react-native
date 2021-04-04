import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, View, Text, BackHandler } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PageHeader from '../../components/DrawerPageHeader';
import NarguileIcon from '../../assets/icons/Narguile';
import EssenceIcon from '../../assets/icons/Essence';
import NewsIcon from '../../assets/icons/News';

import styles from './styles';
import { useAuth } from '../../hooks/auth';

const Home = ({ navigation }) => {
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
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
      <PageHeader title="" drawerNavigation={navigation} />
      <SafeAreaView>
        <View style={styles.headerBackground}>
          <Text style={styles.headline}>
            Bem vindo,
            {user ? `\n${user.name}` : '\nNarguileiro'}
          </Text>
          <Text style={styles.subHeadline}>
            Você está em um guia completo feito para os narguileiros de todo o
            mundo.
          </Text>
        </View>
        <View style={styles.headerRect} />
        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.baseButton, styles.essenceButton]}
            onPress={handleEssencesButtonPress}
          >
            <EssenceIcon />
            <Text style={styles.textButton}>Essências</Text>
          </RectButton>
          <RectButton
            style={[styles.baseButton, styles.narguileButton]}
            onPress={handleNarguilesButtonPress}
          >
            <NarguileIcon />
            <Text style={styles.textButton}>Narguiles</Text>
          </RectButton>
          <RectButton
            style={[styles.baseButton, styles.mixButton]}
            onPress={handleMixesButtonPress}
          >
            <Icon name="favorite" style={styles.buttonIcon} size={60} />
            <Text style={styles.textButton}>Mixes</Text>
          </RectButton>
          <RectButton
            style={[styles.baseButton, styles.newsButton]}
            onPress={handleNewsButtonPress}
          >
            <NewsIcon />
            <Text style={styles.textButton}>Notícias</Text>
          </RectButton>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
