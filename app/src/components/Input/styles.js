import React from 'react';
import styled, { css } from 'styled-components/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 90%;
  max-width: 350px;
  margin: 20px auto;
`;
export const IconedContainer = styled(Container)`
  margin: 2px auto;
`;

export const Label = styled.Text`
  color: white;
  font-weight: bold;
`;

export const Line = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 1px;
  margin-top: 2px;
`;


export const TextInput = styled.TextInput`
  padding: 5px 5px;
  background-color: white;
  flex: 1;
`;


export const Error = styled.Text`
  color: #ff0000;
  /* margin: 3px 0; */
`;

export const EyeIcon = styled(FontAwesomeIcons)`
  color: #adadad;
  font-size: 20px;
`;

export const Eye = styled(({ name, ...props }) => (
  <TouchableOpacity {...props}>
    <EyeIcon name={name} />
  </TouchableOpacity>
))`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const InputWrapper = styled.View`
  height: 30px;
`;