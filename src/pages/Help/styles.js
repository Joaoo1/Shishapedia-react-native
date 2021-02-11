import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.screenHorizontalPadding,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  logo: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor: colors.primaryColor,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  headerText: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
    textAlign: 'center',
    color: colors.text,
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
    height: 200,
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
    fontFamily: fonts.light,
    fontSize: fonts.regularSize,
    textAlign: 'justify',
    color: colors.text,
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
    zIndex: 1000,
  },
});

export default styles;
