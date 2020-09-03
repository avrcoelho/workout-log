import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 14px;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0 10px;

    &::placeholder {
      color: #666360;
    }
  }

  small {
    font-size: 14px;
    color: #c53030;
  }
`;
