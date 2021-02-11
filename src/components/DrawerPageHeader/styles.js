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
  icon: {
    marginLeft: 20,
  },
  badge: {
    position: 'absolute',
    top: -7,
    right: -2,
    backgroundColor: '#eb4034',
    height: 18,
    width: 18,
    borderRadius: 50,
    justifyContent: 'center',
  },
  badgeText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: fonts.bold,
  },
});

export default styles;
