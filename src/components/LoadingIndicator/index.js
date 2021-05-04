import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/theme';
import Loading from './styles';

const propTypes = {
  isAnimating: PropTypes.bool.isRequired,
};

const LoadingIndicator = ({ isAnimating }) => {
  const { colors } = useTheme();

  return (
    <Loading size="large" color={colors.accentColor} animating={isAnimating} />
  );
};

LoadingIndicator.propTypes = propTypes;

export default LoadingIndicator;
