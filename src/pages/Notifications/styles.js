import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.screenHorizontalPadding,
    paddingVertical: metrics.screenHorizontalPadding,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: fonts.titleSize,
    fontFamily: fonts.bold,
    color: colors.text,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  loading: {
    position: 'absolute',
    marginTop: '65%',
    marginLeft: '37%',
  },
});

export default styles;
