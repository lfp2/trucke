import React, { useRef } from 'react';
import Header from '../../components/Header';
import { Container, HeaderText, Button } from './styles';
import { Form } from '@unform/mobile';
import MaskedBaseInput from '../../components/Input/maskedInput';
import { useNavigation } from '@react-navigation/native';

export default function Cpf(){
    const navigation = useNavigation();
    const formRef = useRef();
    const cpfRef = useRef();
    return (
      <Container>
        <Header title="Cadastro" />
        <HeaderText>Insira seu CPF</HeaderText>
        <Form ref={formRef}>
          <MaskedBaseInput
            ref={cpfRef}
            type={'cpf'}
            name="cpf"
            label="CPF"
            placeholder="CPF*"
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              cpfRef.current?.getElement().focus();
            }}
          />
        </Form>
        <Button isPrimary={true} onPress={() => navigation.navigate('SignUpFirst')}>
          Bora lá
        </Button>
      </Container>
    );
}