import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 20,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 0.5,
    flex: 1,
  },
  firstItem: {
    borderTopColor: 'rgba(0, 0, 0, 0.15)',
    borderTopWidth: 0.5,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  itemTitle: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
    color: colors.text,
    flex: 1,
  },
});

export default styles;
