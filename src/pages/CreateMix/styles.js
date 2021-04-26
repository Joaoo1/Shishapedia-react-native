import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  form: {
    marginHorizontal: metrics.screenHorizontalPadding,
    marginBottom: 40,
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
  descriptionInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  inputContainer: {
    marginTop: 25,
  },
  inputLabel: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fonts.inputSize,
  },
  warningText: {
    color: 'red',
    marginTop: 20,
    marginHorizontal: metrics.screenHorizontalPadding,
  },
  dropdownContainer: {
    height: metrics.inputHeight,
  },
  inputCategory: {
    height: 200,
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
    zIndex: 100000,
  },
});

export default styles;
