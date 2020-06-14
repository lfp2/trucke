import React from "react";
import {
  Wrapper,
  Container,
  Main,
  Logo,
  Icons,
  Icon,
  MinifiedContainer,
  FullSizeContainer,
  FullsizeLogo,
  Anchors,
  Anchor,
  MenuToggler
} from "./styles";
import { useToggle } from "react-use";

const Minified = ({ isOn }: { isOn: boolean }) => {
  return (
    <MinifiedContainer isOn={isOn}>
      <Logo />
      <Icons>
        <Icon src="/icons/home.svg" />
        <Icon src="/icons/user.svg" />
        <Icon src="/icons/plus.svg" />
        <Icon src="/icons/cog.svg" />
        <Icon src="/icons/exit.svg" />
      </Icons>
    </MinifiedContainer>
  );
};

const FullSize = ({ isOn }: { isOn: boolean }) => {
  return (
    <FullSizeContainer isOn={isOn}>
      <FullsizeLogo />
      <Anchors>
        <Anchor icon="/icons/home.svg">Início</Anchor>
        <Anchor icon="/icons/user.svg">Perfil</Anchor>
        <Anchor icon="/icons/plus.svg">Novo Paciente</Anchor>
        <Anchor icon="/icons/cog.svg">Configurações</Anchor>
        <Anchor icon="/icons/exit.svg">Sair</Anchor>
      </Anchors>
    </FullSizeContainer>
  );
};

const Nav: React.FC = ({ children }) => {
  const [isOn, toggle] = useToggle(false);
  return (
    <Wrapper isOn={isOn}>
      <Main isOn={isOn}>{children}</Main>
      <Container isOn={isOn}>
        <Minified isOn={isOn} />
        <FullSize isOn={isOn} />
        <MenuToggler onClick={() => toggle()} isOn={isOn} />
      </Container>
    </Wrapper>
  );
};

export default Nav;
