import { useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function Input({ name, placeholder, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);
  return (
    <TextInput
      ref={inputRef}
      defaultValue={defaultValue}
      placeholderTextColor="#c1bccc"
      placeholder={placeholder}
      onChangeText={(value) => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
}

Input.propTypes = propTypes;

export default Input;
