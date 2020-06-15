import React from 'react';
import {
  Container,
  ProfilePic,
  TruckerName,
  TruckerPic,
  ButtonPic,
  Button,
  ScrollContainer
} from './styles';

export default function Menu() {
  return (
    <ScrollContainer>
      <Container>
        <ProfilePic />
        <TruckerName>Ednaldo Pereira</TruckerName>
        <TruckerPic />
        <Button text={'Rank Trucker'}>
          <ButtonPic source={require('../../assets/images/rank.png')} />
        </Button>
        <Button text={'Histórico de Consultas'}>
          <ButtonPic source={require('../../assets/images/historico.png')} />
        </Button>
        <Button text={'Loja Trucker'}>
          <ButtonPic source={require('../../assets/images/store.png')} />
        </Button>
        <Button text={'Foto do Atestado Médico'}>
          <ButtonPic source={require('../../assets/images/atestado.png')} />
        </Button>
        <Button text={'Perfil'}>
          <ButtonPic source={require('../../assets/images/profile.png')} />
        </Button>
        <Button text={'Sair'} />
      </Container>
    </ScrollContainer>
  );
}
