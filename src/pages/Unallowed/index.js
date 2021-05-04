import { BackHandler, View } from 'react-native';

import Logo from '../../assets/illustrations/Logo.svg';
import { useTheme } from '../../hooks/theme';
import { Container, Title, Headline, Text } from './styles';

const Unallowed = () => {
  const { colors } = useTheme();

  BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp();
    return true;
  });

  return (
    <>
      <Container backgroundColor={colors.primaryColor}>
        <View>
          <Title color={colors.whiteText}>Shishapedia</Title>
          <Headline color={colors.whiteText}>PROIBIDO</Headline>
          <Text color={colors.whiteText}>
            Infelizmente você não pode utilizar esse aplicativo por ser menor da
            idade.
          </Text>
        </View>
        <Logo />
        <Text color={colors.whiteText}>{`${new Date().getFullYear()} ©`}</Text>
      </Container>
    </>
  );
};

export default Unallowed;
