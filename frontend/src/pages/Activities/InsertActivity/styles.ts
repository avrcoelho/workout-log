import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  fieldset {
    border: solid 1px #ccc;
    width: 100%;
    border-radius: 4px;
    padding: 9px 20px 20px 20px;
  }

  legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 14px;
    color: #999;
  }

  form {
    display: flex;
    flex-direction: row;

    @media (max-width: 560px) {
      flex-direction: column;
    }

    > div {
      margin-top: 0 !important;
      margin-right: 10px;

      @media (max-width: 560px) {
        margin-top: 0 !important;
        margin-bottom: 10px !important;
        margin-right: 0;
      }
    }

    button {
      margin-top: 0 !important;
    }
  }
`;
