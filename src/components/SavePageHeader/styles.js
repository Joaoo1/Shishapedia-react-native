import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    height: 60,
    paddingHorizontal: metrics.screenHorizontalPadding,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fonts.titleSize,
    color: colors.systemText,
  },
  leftIcon: {
    marginRight: 30,
  },
  rightIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  save: {
    color: colors.systemText,
  },
});

export default styles;
