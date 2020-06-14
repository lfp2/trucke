import styled from "src/lib/StyledComponents";
import React from "react";
import { darken } from "polished";

export const Wrapper = styled.div<{ isOn: boolean }>`
  display: flex;
  flex-direction: row;
  transition: transform 0.2s ease-in;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

export const Container = styled.div<{ isOn: boolean }>`
  min-height: 100vh;
  width: 250px;
  /* flex: 1; */
  position: fixed;
  left: -250px;
  top: 0;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${p => (p.isOn ? 250 : 50)}px);
  background-color: ${props => props.theme.navBackground};
`;

export const Main = styled.div<{ isOn: boolean }>`
  transition: padding 0.2s ease-in-out;
  min-height: 100vh;
  flex: 1;
  min-width: 100vw;
  /* background-color: yellow; */
  padding-left: ${p => (p.isOn ? 250 : 50)}px;
  overflow-x: hidden;
`;

export const Logo = styled.img.attrs({
  src: "/logos/minified.svg"
})`
  width: 80%;
  max-width: 200px;
  margin: 10px auto;
  display: block;
`;

export const Icons = styled.div`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 15px auto;
  display: block;
`;

export const MinifiedContainer = styled.div<{ isOn: boolean }>`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  transition: opacity 0.3s ease-in-out;
  opacity: ${p => (p.isOn ? 0 : 1)};
  /* margin-left: auto; */
  position: absolute;
  top: 0;
  right: 0;
`;

export const Anchors = styled.div`
  flex-direction: column;
`;

const RightArrow = styled.img.attrs({
  src: "/icons/right-arrow.svg"
})`
  width: 20px;
  height: 20px;
  margin-left: auto;
`;

const AnchorText = styled.p`
  color: white;
  font-size: 1.4rem;
  margin: 0;
  margin-left: 20px;
`;

export const Anchor = styled(({ icon, children, ...props }) => (
  <div {...props}>
    <Icon src={icon} />
    <AnchorText>{children}</AnchorText>
    <RightArrow />
  </div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  ${Icon} {
    margin: 0 10px;
  }
`;

export const FullsizeLogo = styled.img.attrs({
  src: "/logos/full.svg"
})`
  margin: 20px auto;
  display: block;
`;

export const FullSizeContainer = styled.div<{ isOn: boolean }>`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  transition: opacity 0.3s ease-in-out;
  opacity: ${p => (p.isOn ? 1 : 0)};
  user-select: ${p => (p.isOn ? "all" : "none")};
  pointer-events: ${p => (p.isOn ? "all" : "none")};
`;

const TogglableIcon = styled.img.attrs({
  src: "/icons/arrow.svg"
})<{ isOn: boolean }>`
  transform: scaleX(${props => (props.isOn ? "1" : "-1")});
`;

export const MenuToggler = styled(({ isOn, ...props }) => (
  <div {...props}>
    <TogglableIcon isOn={isOn} />
  </div>
))`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${props => props.theme.navBackground};
  position: absolute;
  top: 30px;
  width: 30px;
  right: -29px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 100;
  cursor: pointer;
`;
