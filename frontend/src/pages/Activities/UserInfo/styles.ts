import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  span {
    font-size: 14px;
    color: #666;
  }
`;

export const ButtonLogout = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
