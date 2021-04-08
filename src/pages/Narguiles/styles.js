import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: fonts.titleSize,
    marginVertical: 35,
    marginHorizontal: 20,
    textAlign: 'center',
    color: colors.text,
  },
});

export default styles;
