import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  border: solid 1px #eee;
  border-radius: 4px;
  background: #fff;

  h1 {
    text-transform: uppercase;
    font-size: 20px;
    margin: auto;
    margin-bottom: 40px;
  }
`;
