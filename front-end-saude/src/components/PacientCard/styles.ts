import styled from "src/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #c4c4c4;
  margin: 0 auto;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 5px;
`;

export const ProfilePic = styled.img.attrs({
  src: "/images/ednaldo.png"
})`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

export const Name = styled.p`
  text-transform: uppercase;
  color: #333333;
  margin: 0 10px;
  font-size: 2rem;
  font-weight: bold;
`;
