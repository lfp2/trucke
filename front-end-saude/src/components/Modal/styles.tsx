import React from "react";

import styled, { css } from "src/lib/StyledComponents";

export const Overlay = styled.div<{ isOn: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  ${props =>
    props.isOn &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: white;
  font-family: Montserrat;
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Button = styled.button<{ width?: string }>`
  border: none;
  width: ${props => props.width || "100%"};
  margin: 10px auto;
  /* max-width: 400px; */
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  font-size: 2rem;
  display: block;
  cursor: pointer;
`;

export const Message = styled.p`
  width: 90%;
  max-width: 400px;
  font-size: 2rem;
  color: #333333;
  display: block;
  margin: 0.5rem auto;
  margin-top: 0.5rem;
  text-align: center;
`;
