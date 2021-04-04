import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fonts.titleSize,
    color: colors.whiteText,
    textAlign: 'center',
    marginBottom: 60,
    marginTop: 15,
  },
  headline: {
    fontFamily: fonts.bold,
    fontSize: fonts.bigSize,
    color: colors.whiteText,
    textAlign: 'center',
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
    color: colors.whiteText,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  button: {
    padding: metrics.screenHorizontalPadding,
    backgroundColor: colors.buttonBackground,
    borderRadius: metrics.inputBorderRadius,
    width: '100%',
    height: metrics.inputHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.buttonText,
    fontFamily: fonts.bold,
    fontSize: fonts.inputSize,
  },
});

export default styles;
