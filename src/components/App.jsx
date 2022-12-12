import styled from 'styled-components';
import Widget from './widget/Widget';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 40px;
  color: #010101;
`;

export const App = () => {
  return (
    <Container>
      <Widget />
    </Container>
  );
};
