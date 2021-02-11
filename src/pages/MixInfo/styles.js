import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: { backgroundColor: 'rgba(218,218,218,0.6)' },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
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
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  mixName: {
    maxWidth: '90%',
    fontSize: 26,
    fontFamily: fonts.bold,
    color: colors.text,
  },
  descriptionText: {
    fontSize: fonts.regularSize,
    fontFamily: fonts.light,
    color: colors.text,
    marginBottom: 10,
    textAlign: 'justify',
  },
  boldText: {
    fontFamily: fonts.bold,
    marginBottom: 10,
    color: colors.text,
  },
});

export default styles;
