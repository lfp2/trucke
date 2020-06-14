import { Form as BaseForm } from "@unform/web";
import styled from "src/lib/StyledComponents";

const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* padding: 2rem; */
  width: 90%;
`;

export default Form;
