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
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  essenceName: {
    fontSize: 26,
    fontFamily: fonts.bold,
    color: colors.text,
  },
  descriptionText: {
    color: colors.text,
    fontSize: fonts.regularSize,
    fontFamily: fonts.light,
    marginBottom: 10,
    textAlign: 'justify',
  },
  boldText: {
    color: colors.text,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  ratesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rate: {
    color: '#F2C94C',
    marginStart: 3,
  },
  reviews: {
    fontFamily: fonts.light,
    marginStart: 10,
    marginTop: 2,
    color: '#9B9B9B',
  },
});

export default styles;
