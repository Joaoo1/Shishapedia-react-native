import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/theme';
import { metrics } from '../../styles';

import { MyInput, Error, Label, InputContainer, Icon } from './styles';

const defaultProps = {
  label: null,
  error: null,
  height: metrics.inputHeight,
  searchIcon: false,
  searchIconPress: () => {},
};

const propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  height: PropTypes.number,
  searchIcon: PropTypes.bool,
  searchIconPress: PropTypes.func,
};

function Input({ label, error, height, searchIcon, searchIconPress, ...rest }) {
  const { colors } = useTheme();

  return (
    <>
      <InputContainer>
        {label && <Label textColor={colors.text}>{label}</Label>}
        <MyInput
          placeholderTextColor={colors.inputPlaceholderText}
          backgroundColor={colors.inputBackground}
          borderColor={colors.inputBorder}
          textColor={colors.text}
          height={height}
          {...rest}
        />
        {searchIcon && (
          <Icon
            onPress={searchIconPress}
            name="search"
            size={28}
            color="#c1bccc"
          />
        )}
        {error && <Error>{error}</Error>}
      </InputContainer>
    </>
  );
}

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
