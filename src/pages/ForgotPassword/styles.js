import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.screenHorizontalPadding + 5,
    backgroundColor: colors.primaryColor,
    flex: 1,
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
  },
  inputLabel: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fonts.inputSize,
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
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
    zIndex: 1000,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
    color: colors.systemText,
    marginTop: 10,
  },
});

export default styles;
