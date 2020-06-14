import React from "react";
import styled from "src/lib/StyledComponents";
import { darken } from "polished";

const ButtonText = styled.p`
  color: white;
`;

export const Button = styled(({ children, ...props }) => (
  <button type="button" {...props}>
    <ButtonText>{children}</ButtonText>
  </button>
))`
  cursor: pointer;
  padding: 0.2rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #47a087;
  &:hover {
    background-color: ${darken(0.15, "#47a087")};
  }
`;
