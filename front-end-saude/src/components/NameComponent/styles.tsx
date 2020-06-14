import styled from "src/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p``;

export const ProfilePic = styled.img.attrs({
  src: "/images/ednaldo.png"
})`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
