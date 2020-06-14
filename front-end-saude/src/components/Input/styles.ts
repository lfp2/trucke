import styled, { css } from "src/lib/StyledComponents";

export const Container = styled.div`
  /* padding: 0 1rem; */
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
`;

const inputStyles = css`
  border: 2px solid #a9abac;
  border-radius: 5px;
  padding: 1.5rem;
  font-size: 2rem;
  &:focus {
    border-color: ${props => props.theme.primary};
    outline: ${props => props.theme.primary};
  }
  /* box-shadow: 0px 3px 0px ${props => props.theme.primary}; */
`;

export const StyledInput = styled.input<{ ref: any }>`
  ${inputStyles}
`;

export const StyledTextArea = styled.textarea<{ ref: any }>`
  ${inputStyles}
  resize: none;
  height: fit-content;
  font-family: Roboto, Arial, Helvetica, sans-serif;
`;

export const StyledLabel = styled.label`
  /* font-weight: bold; */
  font-size: 1.5rem;
  color: ${props => props.theme.white};
  width: 100%;
  text-align: left;
  margin: 0.8rem 0.5rem;
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-size: 2rem;
  text-transform: capitalize;
`;
