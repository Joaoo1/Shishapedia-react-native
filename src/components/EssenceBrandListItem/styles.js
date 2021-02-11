import { StyleSheet } from 'react-native';

import { fonts } from '../../styles';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 0.5,
  },
  firstItem: {
    borderTopColor: 'rgba(0, 0, 0, 0.15)',
    borderTopWidth: 0.5,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  itemImage: {
    flex: 1,
    maxWidth: 50,
    maxHeight: 50,
    marginRight: 20,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
  },
  itemLabel: {
    fontFamily: fonts.light,
    fontSize: fonts.regularSize,
    color: '#9B9B9B',
    marginTop: 2,
  },
  textContainer: {
    justifyContent: 'center',
  },
});

export default styles;
