import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 30px;
`;

export const Item = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  font-weight: bold;
  color: #5b0095;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Total = styled.span`
  font-size: 18px;
  color: #666;
  font-weight: bold;
  margin-top: 24px;
  display: block;
  text-align: center;
`;
