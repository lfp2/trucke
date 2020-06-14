import React, { useEffect } from "react";
import { useField } from "@unform/core";
import Select from "react-select";
import { StyledLabel, Container, ErrorMessage, Selects } from "./styles";

const Selector = ({ name, label, width = "100%", placeholder, options }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = React.useState(defaultValue || "");
  const ref = React.useRef(null);
  const focus = () => {
    ref.current.select.focus();
  };
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: { value, focus },
      setValue: v => {
        setValue(v);
      },
      getValue: () => {
        return value;
      }
    });
  }, [fieldName, registerField, value]);
  const handleValueChange = ({ value: v }) => {
    setValue(v);
  };
  return (
    <Container
      style={{
        width
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      <Selects>
        <Select
          ref={ref}
          className="react-select"
          classNamePrefix="react-select"
          value={options.find(e => e.value === value)}
          options={options}
          placeholder={placeholder}
          onChange={handleValueChange}
        />
      </Selects>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default Selector;
