import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  unread: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: metrics.screenHorizontalPadding,
    paddingTop: 15,
  },
  read: {
    backgroundColor: '#fff',
    paddingHorizontal: metrics.screenHorizontalPadding,
    paddingTop: 15,
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationTitle: {
    fontSize: fonts.regularSize,
    fontFamily: fonts.regular,
    color: colors.text,
  },
  notificationDate: {
    fontSize: fonts.regularSize - 1,
    fontFamily: fonts.regular,
    color: colors.text,
  },
  notificationMessage: {
    fontSize: fonts.tinySize,
    fontFamily: fonts.light,
    color: colors.text,
  },
  divider: {
    marginTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c9c9c9',
  },
  icon: {
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
});

export default styles;
