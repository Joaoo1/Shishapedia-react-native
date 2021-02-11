import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: metrics.BottomTabHeight + 35,
  },
  list: {
    paddingHorizontal: 20,
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
    borderRadius: 10,
    margin: 20,
    elevation: 1,
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
    zIndex: 1000,
  },
});

export default styles;
