import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    paddingVertical: metrics.screenHorizontalPadding,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listItem: {
    paddingHorizontal: 15,
  },
  unread: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: metrics.screenHorizontalPadding,
    paddingTop: metrics.screenHorizontalPadding,
  },
  read: {
    backgroundColor: '#fff',
    paddingHorizontal: metrics.screenHorizontalPadding,
    paddingTop: metrics.screenHorizontalPadding,
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
  divider: {
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c9c9c9',
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
  },
});

export default styles;
