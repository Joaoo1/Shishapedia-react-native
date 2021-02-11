import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 0.5,
    paddingHorizontal: metrics.screenHorizontalPadding,
    marginHorizontal: 5,
  },
  firstItem: {
    borderTopColor: 'rgba(0, 0, 0, 0.15)',
    borderTopWidth: 0.5,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 20,
  },
  itemTitle: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
    color: colors.text,
  },
});

export default styles;
