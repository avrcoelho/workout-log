import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #5b0095;
  border: 0;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 42px;

  &:hover {
    background-color: ${shade(0.2, '#5b0095')};
  }
`;
