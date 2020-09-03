import styled from 'styled-components';

interface ContainerProps {
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 14px;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid ${({ hasError }) => (hasError ? '#c53030' : '#999')};
    border-radius: 4px;
    padding: 0 10px;

    &::placeholder {
      color: #666360;
    }
  }

  small {
    font-size: 12px;
    color: #c53030;
  }
`;
