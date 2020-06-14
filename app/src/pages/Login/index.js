import React from 'react';
import {
    Button,
    Container,
    Body,
    TopSection,
    Rectangle,
    HeaderText,
    Logo
} from './styles';

export default function Login(){
    return (
      <Container>
        <Logo />
        <TopSection>
          <Rectangle />
          <Rectangle />
          <HeaderText>Bem-vindo(a) Caminhoneiro(a)!</HeaderText>
        </TopSection>
        <Body>
          <Button isPrimary={true}>Entrar</Button>
          <Button>Cadastrar</Button>
        </Body>
      </Container>
    );
}
