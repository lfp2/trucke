import React from "react";
import { Container, Title, SearchInput, Button, PlusIcon } from "./styles";

const TableHeader = ({ action }) => {
  return (
    <Container>
      <Title>Pacientes</Title>
      <SearchInput placeholder="Pesquisar..." />
      <Button
        onClick={() => {
          if (action) {
            action();
          }
        }}
      >
        Novo Paciente <PlusIcon />
      </Button>
    </Container>
  );
};

export default TableHeader;
