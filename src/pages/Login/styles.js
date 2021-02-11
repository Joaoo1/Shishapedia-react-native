import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fonts.titleSize,
    color: colors.whiteText,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 15,
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
  googleButton: {
    marginTop: 12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: metrics.inputHeight,
    alignItems: 'center',
    borderRadius: metrics.inputBorderRadius,
    width: '100%',
    paddingHorizontal: 16,
  },
  googleButtonText: {
    color: colors.text,
    fontSize: fonts.regularSize,
    fontFamily: fonts.bold,
    marginLeft: 10,
  },
  facebookButton: {
    marginTop: 12,
    flexDirection: 'row',
    backgroundColor: '#3B5999',
    height: metrics.inputHeight,
    alignItems: 'center',
    borderRadius: metrics.inputBorderRadius,
    width: '100%',
    paddingHorizontal: 15,
  },
  facebookButtonText: {
    color: colors.whiteText,
    fontSize: fonts.regularSize,
    fontFamily: fonts.bold,
    marginLeft: 11,
  },
  orText: {
    marginTop: 20,
    color: colors.whiteText,
    fontSize: fonts.bigSize,
    fontFamily: fonts.bold,
  },
  input: {
    height: metrics.inputHeight,
    backgroundColor: colors.inputBackground,
    fontSize: fonts.inputSize,
    fontFamily: fonts.regular,
    borderRadius: metrics.inputBorderRadius,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingHorizontal: 16,
    marginTop: 20,
    width: '100%',
  },
  forgotPasswordText: {
    alignSelf: 'flex-start',
    color: colors.whiteText,
    marginTop: 10,
    fontSize: fonts.regularSize,
    fontFamily: fonts.light,
  },
  createAccountText: {
    fontSize: fonts.bigSize,
    fontFamily: fonts.bold,
    color: colors.whiteText,
    textDecorationLine: 'underline',
    marginTop: 40,
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
    zIndex: 1000,
  },
});

export default styles;
