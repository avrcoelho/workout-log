import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  border-top: solid 1px #e4e4e4;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  &.space-between {
    justify-content: space-between;
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  outline: none;
`;
