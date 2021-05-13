import PropTypes from 'prop-types';
import { useTheme } from '../../hooks/theme';

import { MyButton, ButtonText } from './styles';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Button = ({ text, ...rest }) => {
  const { colors } = useTheme();

  return (
    <MyButton backgroundColor={colors.buttonBackground} {...rest}>
      <ButtonText color={colors.buttonText}>{text}</ButtonText>
    </MyButton>
  );
};

Button.propTypes = propTypes;

export default Button;
