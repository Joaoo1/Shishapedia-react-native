import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: metrics.BottomTabHeight + 35,
    backgroundColor: '#fff',
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
  headline: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    fontSize: fonts.titleSize,
    fontFamily: fonts.bold,
    color: '#000',
    padding: 15,
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
  },
  notFound: {
    fontSize: fonts.bigSize,
    fontFamily: fonts.regular,
    color: colors.text,
    flexGrow: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;
