import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: { backgroundColor: 'rgba(218,218,218,0.6)' },
  imageContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    width: '100%',
    maxHeight: 280,
  },
  infoContainer: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: metrics.screenHorizontalPadding + 10,
    paddingTop: 30,
    marginBottom: 80,
  },
  narguileName: {
    fontSize: 26,
    fontFamily: fonts.bold,
    color: colors.text,
    maxWidth: 260,
  },
  descriptionText: {
    color: colors.text,
    fontSize: fonts.regularSize,
    fontFamily: fonts.light,
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default styles;
