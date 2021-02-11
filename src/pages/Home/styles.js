import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  headerBackground: {
    zIndex: -1,
    backgroundColor: colors.primaryColor,
    paddingHorizontal: metrics.screenHorizontalPadding,
  },
  headerRect: {
    zIndex: -2,
    right: 30,
    top: -85,
    width: '120%',
    height: 170,
    backgroundColor: colors.primaryColor,
    borderBottomRightRadius: 400,
    borderBottomLeftRadius: 80,
    transform: [{ rotate: '-8deg' }],
  },
  headline: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: colors.whiteText,
    marginBottom: 10,
  },
  subHeadline: {
    fontFamily: fonts.light,
    color: colors.whiteText,
  },
  buttonsContainer: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  baseButton: {
    minWidth: '40%',
    maxHeight: 150,
    flex: 1,
    margin: 8,
    borderRadius: 15,
    elevation: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  essenceButton: {
    backgroundColor: '#2481EF',
  },
  narguileButton: {
    backgroundColor: '#EF9224',
  },
  mixButton: {
    backgroundColor: '#BA24EF',
  },
  newsButton: {
    backgroundColor: '#24EFBE',
  },
  textButton: {
    color: colors.buttonText,
    fontFamily: fonts.regular,
    marginTop: 5,
  },
  buttonIcon: {
    color: 'white',
  },
});

export default styles;
