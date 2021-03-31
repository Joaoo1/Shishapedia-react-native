import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.screenHorizontalPadding,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    width: '100%',
  },
  headerButton: {
    backgroundColor: colors.buttonBackground,
    width: 100,
    height: 35,
    borderRadius: 15,
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.buttonText,
    fontFamily: fonts.bold,
    fontSize: 13,
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
    marginTop: 5,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: metrics.inputBorderRadius,
    marginTop: 25,
  },
  inputLabel: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fonts.inputSize,
  },
  divider: {
    borderBottomColor: 'rgba(0,0,0,0.25)',
    borderBottomWidth: 0.5,
    marginTop: 35,
  },
  loading: {
    position: 'absolute',
    marginTop: '75%',
    marginLeft: '37%',
    zIndex: 1,
  },
  deleteUserText: {
    fontFamily: fonts.light,
    fontSize: fonts.regularSize,
    color: 'red',
    textDecorationLine: 'underline',
    marginTop: 30,
  },
});

export default styles;
