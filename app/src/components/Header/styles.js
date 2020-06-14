import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
`;

export const IconWrapper = styled.TouchableOpacity`
  align-items: center;
  position: absolute;
  left: 15px;
`;

export const BackIcon = styled(Icon).attrs((props) => ({
  name: 'arrow-left',
  color: 'white',
  size: 30,
}))``;

export const Title = styled.Text`
  font-size: 24px;
  letter-spacing: 1px;
  color: white;
  line-height: 35px;
  text-align: center;
  margin: 10px auto;
`;
