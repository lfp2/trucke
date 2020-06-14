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
import { useNavigation } from '@react-navigation/native';

export default function Login(){
    const navigation = useNavigation();
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
          <Button onPress={() =>navigation.navigate('Cpf')}>Cadastrar</Button>
        </Body>
      </Container>
    );
}
