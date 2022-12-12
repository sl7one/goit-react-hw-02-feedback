import styled from 'styled-components';
const Title = styled.p`
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Headerline = ({ title }) => <Title>{title}</Title>;
export default Headerline;
