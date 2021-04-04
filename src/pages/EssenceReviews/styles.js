import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(218,218,218,0.4)',
  },
  scrollViewContainerStyle: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.screenHorizontalPadding,
  },
  reviewsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    borderWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: metrics.screenHorizontalPadding + 10,
    paddingTop: 30,
  },
  reviewAuthor: {
    fontFamily: fonts.bold,
    fontSize: fonts.regularSize,
    color: colors.text,
  },
  reviewText: {
    fontFamily: fonts.regular,
    fontSize: fonts.regularSize,
    color: colors.text,
    marginTop: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  divider: {
    borderBottomColor: colors.divider,
    borderBottomWidth: 0.5,
    marginTop: 15,
    marginBottom: 30,
  },
  headerText: {
    fontFamily: fonts.bold,
    fontSize: fonts.bigSize + 4,
    color: colors.text,
    marginLeft: 10,
  },
  rating: {
    color: '#FFDD55',
    fontFamily: fonts.regular,
    fontSize: fonts.bigSize,
    marginLeft: 5,
  },
  star: {
    marginRight: 5,
  },
  image: {
    width: 28,
    height: 44,
  },
  makeReviewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  reviewInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  reviewDate: {
    fontFamily: fonts.light,
    fontSize: fonts.tinySize,
    color: '#9b9b9b',
    marginLeft: 10,
  },
  input: {
    backgroundColor: colors.inputBackground,
    fontSize: fonts.inputSize,
    fontFamily: fonts.regular,
    borderRadius: metrics.inputBorderRadius,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingHorizontal: 16,
    height: 130,
    textAlignVertical: 'top',
  },
  button: {
    padding: 20,
    backgroundColor: colors.buttonBackground,
    borderRadius: metrics.inputBorderRadius,
    height: metrics.inputHeight,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 15,
  },
  buttonText: {
    color: colors.buttonText,
    fontFamily: fonts.bold,
    fontSize: fonts.inputSize,
  },
  loading: {
    position: 'absolute',
    marginTop: '95%',
    marginLeft: '37%',
    zIndex: 1000,
  },
  notFound: {
    fontSize: fonts.regularSize,
    fontFamily: fonts.regular,
    color: colors.text,
    flexGrow: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;
