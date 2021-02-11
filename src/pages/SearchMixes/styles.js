import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20,
    elevation: 1,
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
  list: {
    paddingHorizontal: 20,
  },
  loading: {
    position: 'absolute',
    marginTop: '55%',
    marginLeft: '37%',
  },
  notFound: {
    fontSize: fonts.regularSize,
    fontFamily: fonts.regular,
    color: colors.text,
    flexGrow: 1,
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default styles;
