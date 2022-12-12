import styled from 'styled-components';

const Item = styled.p`
display: flex;
font-size: 20px;'
`;

const Statistic = ({ name, value }) => (
  <Item>
    {name}
    {value}
  </Item>
);

export default Statistic;
