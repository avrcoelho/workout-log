import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    height: 36px;
    border: 2px solid #232129;

    &::placeholder {
      color: #666360;
    }
  }

  small {
    font-size: 14px;
    color: #c53030;
  }
`;
