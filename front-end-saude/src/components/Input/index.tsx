import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import {
  StyledInput,
  StyledLabel,
  Container,
  ErrorMessage,
  StyledTextArea
} from "./styles";

interface Props {
  name: string;
  label?: string;
  flex?: number;
  width?: string;
}
type InputProps = JSX.IntrinsicElements["input"] & Props;
const InputWrapper: React.FC<InputProps & { children: any }> = ({
  name,
  label,
  width = "100%",
  children,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current
    });
  }, [fieldName, registerField]);
  return (
    <Container
      style={{
        width
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      {children && children({ fieldName, inputRef, defaultValue, ...rest })}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

const Input: React.FC<InputProps> = ({ ...props }) => (
  <InputWrapper {...props}>
    {({ fieldName, inputRef, defaultValue, ...rest }: any) => (
      <StyledInput
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    )}
  </InputWrapper>
);
export const TextArea: React.FC<InputProps & { rows?: number }> = ({
  ...props
}) => (
  <InputWrapper {...props}>
    {({ fieldName, inputRef, defaultValue, ...rest }: any) => (
      <StyledTextArea
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    )}
  </InputWrapper>
);

export default Input;
