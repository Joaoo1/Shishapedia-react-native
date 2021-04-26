import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
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
  headline: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    fontSize: fonts.bigSize,
    fontFamily: fonts.bold,
    color: '#000',
    padding: 15,
  },
});

export default styles;
