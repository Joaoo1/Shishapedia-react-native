import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    paddingVertical: metrics.screenHorizontalPadding,
    backgroundColor: '#fff',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationTitle: {
    fontSize: fonts.bigSize,
    fontFamily: fonts.regular,
    color: colors.text,
  },
  notificationDate: {
    fontSize: fonts.regularSize,
    fontFamily: fonts.regular,
    color: colors.text,
  },
  notificationMessage: {
    fontSize: fonts.regularSize,
    fontFamily: fonts.light,
    color: colors.text,
    marginTop: 5,
  },
  text: {
    fontSize: fonts.titleSize,
    fontFamily: fonts.bold,
    color: colors.text,
  },
});

export default styles;
