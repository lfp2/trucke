import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Logo = styled.Image.attrs({
  source: require('../../assets/images/Logo_Trucke.png'),
})`
  height: 30%;
  width: 50%;
  margin: 5px auto;
  resize-mode: contain;
`;

export const Container = styled.View`
  background-color: white;
  height: 100%;
  position: relative;
`;

const centerize = css`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;

export const HeaderText = styled.Text`
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto;
  width: 70%;
`;

const ButtonText = styled.Text`
  color: ${(props) =>
    props.isPrimary ? props.theme.secondary : props.theme.primary};
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Rectangle = styled.View`
  background-color: #FFC80B;
  width: 100%;
  height: 20px;
  margin: 10px auto;
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
  background-color: ${(props) => props.isPrimary ? props.theme.primary : props.theme.secondary};
  padding: 15px 0;
  border-radius: 10px;
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.theme.background};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: relative;
  height: 100%;
  padding: 36px;
`;

export const TopSection = styled.View`
  background-color: white;
  flex-direction: column;
`;