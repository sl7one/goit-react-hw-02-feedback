import styled from 'styled-components';

function hover() {
  return ` color: red;
    background-color: orange;`;
}

const s = {
  Container: styled.section`
    // height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
    color: #010101;
  `,
  Headerline: styled.p`
    font-size: 25px;
    margin-top: 30px;
    margin-bottom: 30px;
    &: hover {
      ${hover()}
    } ;
  `,
  StatInfo: styled.p`
    font-size: 25px;
    &: hover {
      ${hover()}
    } ;
  `,
  StatWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
  Btn: styled.button`
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
  `,
  BtnWrapper: styled.div`
    display: flex;
    gap: 10px;
  `,
};

export default s;
