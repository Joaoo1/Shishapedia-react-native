import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
  input: {
    backgroundColor: colors.inputBackground,
    fontSize: fonts.inputSize,
    fontFamily: fonts.regular,
    borderRadius: metrics.inputBorderRadius,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingHorizontal: 16,
    flex: 1,
    textAlignVertical: 'top',
  },
  inputContainer: {
    height: 250,
    backgroundColor: '#fff',
    borderRadius: metrics.inputBorderRadius,
    elevation: 1,
    marginTop: 25,
  },
  button: {
    padding: metrics.screenHorizontalPadding,
    backgroundColor: colors.buttonBackground,
    borderRadius: metrics.inputBorderRadius,
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
  description: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
    textAlign: 'justify',
    color: colors.text,
  },
  footerContainer: {
    marginBottom: 30,
    position: 'absolute',
    bottom: 0,
    right: 25,
  },
  footerText: {
    textAlign: 'right',
    fontFamily: fonts.light,
    fontSize: fonts.regularSize,
    color: colors.text,
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
    zIndex: 100000,
  },
});

export default styles;
