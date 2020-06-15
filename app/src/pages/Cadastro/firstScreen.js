import React, { useRef } from 'react';
import Header from '../../components/Header';
import {
  Container,
  HeaderText,
  Button,
  ProfilePic,
  TruckerName,
  TruckerPic,
  TransportadoraPic,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function FirstScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header title="Cadastro" />
      <ProfilePic />
      <TruckerName>Ednaldo Pereira</TruckerName>
      <TruckerPic />
      <TransportadoraPic />
      <HeaderText>É você?</HeaderText>
      <Button isPrimary={true} onPress={()=>{navigation.navigate("Menu")}}>Sim, Tks</Button>
      <Button>Não</Button>
    </Container>
  );
}
