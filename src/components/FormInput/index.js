import { useRef, useEffect, useCallback } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import Input from '../Input';

const defaultProps = {
  label: null,
};

const propTypes = {
  name: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  label: PropTypes.string,
};

function FormInput({ name, label, onChangeText, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (text) => {
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  return (
    <>
      <Input
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        error={error}
        label={label}
        {...rest}
      />
    </>
  );
}

FormInput.defaultProps = defaultProps;
FormInput.propTypes = propTypes;

export default Input;
