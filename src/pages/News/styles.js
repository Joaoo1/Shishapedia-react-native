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
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
    marginBottom: 70,
    textAlign: 'center',
    maxWidth: 250,
    color: colors.text,
  },
  headline: {
    fontFamily: fonts.bold,
    fontSize: fonts.titleSize,
    textAlign: 'center',
    maxWidth: 250,
    color: colors.text,
    marginTop: 50,
    marginBottom: 20,
  },
});

export default styles;
