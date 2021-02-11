import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 5,
    flex: 1,
  },
  headline: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    fontSize: fonts.bigSize,
    fontFamily: fonts.bold,
    color: '#000',
    padding: 15,
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
    zIndex: 1000,
  },
});

export default styles;
