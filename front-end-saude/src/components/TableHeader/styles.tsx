import styled from "src/lib/StyledComponents";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffc000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0;
  /* justify-content: space-evenly; */
`;

export const Title = styled.p`
  margin: 0 1.2rem;
  text-transform: uppercase;
  color: white;
  font-size: 2rem;
  font-family: Montserrat;
  font-weight: bold;
  letter-spacing: 0.12rem;
`;

export const SearchInput = styled.input`
  margin-left: auto;
  margin-right: 1rem;
  border-radius: 5px;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1.5rem;
  position: relative;
`;

export const Button = styled.button`
  border: none;
  /* margin-left: auto; */
  font-size: 1.5rem;
  padding: 1.5rem 1.5rem;
  border-top-right-radius: 10px;
  background-color: #fc7742;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PlusIcon = styled.img.attrs({
  src: "/icons/plus.svg"
})`
  width: 15px;
  height: 15px;
  margin-left: 0.5rem;
`;
