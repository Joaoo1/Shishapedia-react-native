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
    marginVertical: 70,
    textAlign: 'center',
    maxWidth: 250,
    color: colors.text,
  },
});

export default styles;
