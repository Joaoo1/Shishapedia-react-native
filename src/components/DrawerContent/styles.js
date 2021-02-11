import { StyleSheet } from 'react-native';
import { fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    zIndex: -1,
    top: -4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: fonts.bigSize,
    color: '#fff',
  },
  email: {
    fontFamily: fonts.light,
    fontSize: fonts.tinySize,
    color: '#fff',
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#c9c9c9',
  },
});

export default styles;
