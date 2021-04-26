import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
  floatingButton: {
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: colors.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
  },
});

export default styles;
