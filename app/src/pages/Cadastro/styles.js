import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ProfilePic = styled.Image.attrs({
  source: require('../../assets/images/profile_picture.png'),
})`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  margin: 10px;
  border-width: 2px;
  border-color: white;
`;

export const TruckerPic = styled.Image.attrs({
  source: require('../../assets/images/logo_horizontal.png'),
})`
  margin-top: -20px;
  width: 60%;
  resize-mode: contain;
`;

export const TransportadoraPic = styled.Image.attrs({
  source: require('../../assets/images/transportadora.png'),
})`
  height: 80px;
  resize-mode: contain;
`;

const centerize = css`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;

export const TruckerName = styled.Text`
  color: white;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`;

export const HeaderText = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

export const Container = styled.View`
  background-color: ${(props) => props.theme.background};
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
