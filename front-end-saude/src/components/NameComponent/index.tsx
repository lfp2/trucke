import React from "react";
import { Container, Name, ProfilePic } from "./styles";

const NameComponent = ({
  row: {
    original: { name }
  }
}) => {
  return (
    <Container>
      <ProfilePic />
      <Name>{name}</Name>
    </Container>
  );
};

export default NameComponent;
