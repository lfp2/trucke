import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const centerize = css`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;

export const Button = styled(({ children, text, ...props }) => (
  <TouchableOpacity {...props}>
    {children}
    <ButtonText isPrimary={props.isPrimary}>{text}</ButtonText>
  </TouchableOpacity>
))`
  ${centerize}
  margin-top: 10px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.darkBlue};
  padding: 15px 0;
  border-radius: 10px;
`;

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

export const TruckerName = styled.Text`
  color: white;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`;

export const ButtonPic = styled.Image`
  height: 170px;
  width: 200px;
  resize-mode: contain;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 24px;
  margin: 5px auto;
  font-weight: bold;
`;

export const ScrollContainer = styled.ScrollView`
  background-color: ${(props) => props.theme.background};
  height: 100%;
  position: relative;
`;


export const Container = styled.View`
  align-items: center;
  position: relative;
`;