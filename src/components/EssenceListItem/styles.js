import { StyleSheet } from 'react-native';

import { fonts } from '../../styles';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 20,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 0.5,
  },
  firstItem: {
    borderTopColor: 'rgba(0, 0, 0, 0.15)',
    borderTopWidth: 0.5,
  },
  itemImage: {
    width: 35,
    height: 60,
    marginRight: 20,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
  },
});

export default styles;
