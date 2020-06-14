import React, { useEffect, useRef, useState } from 'react';
import { TextInput, Container, Label, InputWrapper } from './styles';
import { TextInputMask } from 'react-native-masked-text';
import { useField } from '@unform/core';

const MaskedBaseInput = React.forwardRef(
  ({name, mask, label, ...rest }, ref) => {
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue]);
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: { value },
        path: 'value',
        clearValue() {
          setValue('');
        },
        setValue(_, newValue) {
          setValue(value);
        },
        getValue() {
          return value;
        },
      });
    }, [fieldName, registerField, value, setValue]);
    return (
      <Container>
    {label && <Label>{label}</Label>}
      <InputWrapper>
      <TextInput
        as={TextInputMask}
        ref={ref}
        type={mask}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onChangeText={(text) => {
          setValue(text);
        }}
        value={value}
        placeholderTextColor="#7777774D"
        {...rest}
      />
      </InputWrapper>
      </Container>
    );
  },
);
export default MaskedBaseInput;
