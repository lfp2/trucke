import React from "react";
import Nav from "src/components/Nav";
import TableTemplate from "src/components/TableTemplate";
import { useTable } from "react-table";
import { TableWrapper } from "src/styles";
import NameComponent from "src/components/NameComponent";
import Actions from "src/components/Actions";
import TableHeader from "src/components/TableHeader";
import Modal, { Button, Message } from "src/components/Modal";
import Form from "src/components/Form";
import InputMask from "src/components/InputMask";
import PacientCard from "src/components/PacientCard";
import { useToggle, useList, useTitle } from "react-use";
import isValid from "src/utils/isValid";

import * as Yup from "yup";
import { FormHandles } from "@unform/core";

const initialData = [
  {
    name: "Alan das Costas Silva",
    cpf: "435.411.098-35",
    code: "970190",
    owner: "TransporTech"
  },
  {
    name: "Arnaldo Nunes",
    cpf: "583.823.343-30",
    code: "838437",
    owner: "Mob Solutions"
  },
  {
    name: "Bernardo da Silva",
    cpf: "897.478.324-38",
    code: "231838",
    owner: "HiperCargas"
  },
  {
    name: "Bernardo da Silva",
    cpf: "897.478.324-38",
    code: "231838",
    owner: "HiperCargas"
  },
  {
    name: "Bruno César Nascimento",
    cpf: "832.874.832-78",
    code: "312932",
    owner: "Fontana Araujo"
  },
  {
    name: "Claudia Janice",
    cpf: "987.237.089-32",
    code: "483498",
    owner: "Ideal Transportes"
  },
  {
    name: "Cleiton Souza Junior",
    cpf: "892.348.937-89",
    code: "438478",
    owner: "Logimax"
  }
];
const columns = [
  {
    Header: "Nome",
    accessor: "name",
    Cell: NameComponent
  },
  {
    Header: "CPF",
    accessor: "cpf"
  },
  {
    Header: "Matrícula",
    accessor: "code"
  },
  {
    Header: "Empresa",
    accessor: "owner"
  },
  {
    Header: "Ações",
    accessor: "actions",
    centered: true,
    Cell: Actions
  }
];

const schema = Yup.object().shape({
  cpf: Yup.string()
    .required("Obrigatório")
    .min(14, "Obrigatório")
});

const Home = () => {
  const formRef = React.useRef<FormHandles>();
  const [data, { insertAt }] = useList(initialData);
  const [isSearchPacientOn, toggleSearch] = useToggle(false);
  const [isAddPacientOn, toggleAdd] = useToggle(false);

  const handleSubmit = async data => {
    const valid = await isValid(schema, data, formRef);
    console.log(valid, data);
    if (!valid) return;
    formRef.current?.clearField("cpf");
    toggleSearch(false);
    toggleAdd(true);
  };
  const tableProps = useTable({
    columns,
    data
  });

  const handleAdd = () => {
    toggleAdd(false);
    insertAt(0, {
      name: "Ednaldo Pereira",
      cpf: "414.433.508-10",
      code: "970799",
      owner: "Ideal Transportes"
    });
  };
  useTitle("Estrada para a Saúde");
  return (
    <>
      <Nav>
        <TableWrapper>
          <TableHeader
            action={() => {
              toggleSearch(true);
            }}
          />
          <TableTemplate tableProps={tableProps} />
        </TableWrapper>
      </Nav>
      <Modal set={toggleSearch} isOn={isSearchPacientOn}>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <InputMask
            placeholder="ex: 123.456.789-10"
            mask="999.999.999-99"
            name="cpf"
            label="Escreva o CPF do Paciente"
          />
          <Button type="submit">Proximo</Button>
        </Form>
      </Modal>
      <Modal set={toggleAdd} isOn={isAddPacientOn}>
        <Message>Esse é seu paciente?</Message>
        <PacientCard />
        <Button onClick={handleAdd} width="80%">
          Adicionar
        </Button>
      </Modal>
    </>
  );
};

export default Home;
