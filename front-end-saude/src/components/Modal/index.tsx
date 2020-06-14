import React, { useRef } from "react";

import { Overlay, Container, Header, Content } from "./styles";
import { useClickAway } from "react-use";

export { Button, Message } from "./styles";

const Modal: React.FC = ({ set, children, isOn }) => {
  const ref = useRef();
  useClickAway(ref, () => {
    if (set) {
      set(false);
      console.log("ola");
    }
  });
  return (
    <Overlay isOn={isOn}>
      <Container ref={ref}>
        <Header>Adicionar Paciente</Header>
        <Content>{children}</Content>
      </Container>
    </Overlay>
  );
};

export default Modal;
