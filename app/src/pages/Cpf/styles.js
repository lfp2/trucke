import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const HeaderText = styled.Text`
  color: white;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin: 10px auto;
  width: 50%;
`;

const centerize = css`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;


export const Container = styled.View`
  background-color: ${props => props.theme.background};
  height: 100%;
  position: relative;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${(props) =>
    props.isPrimary ? props.theme.secondary : props.theme.primary};
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Button = styled(({ children, ...props }) => (
  <TouchableOpacity {...props}>
    <ButtonText isPrimary={props.isPrimary}>{children}</ButtonText>
  </TouchableOpacity>
))`
  ${centerize}
  margin-top: 10px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isPrimary ? props.theme.primary : props.theme.secondary};
  padding: 15px 0;
  border-radius: 10px;
`;
