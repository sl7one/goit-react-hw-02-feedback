import styled from 'styled-components';
const Btn = styled.button`
  padding: 15px;
  outline: none;
  border-radius: 5px;
  background-color: teal;
  color: white;
  font-size: 18px;
  &:hover {
    background-color: orange;
  }
  cursor: pointer;
`;

const Button = ({ title, onClick }) => <Btn onClick={onClick}>{title}</Btn>;
export default Button;
