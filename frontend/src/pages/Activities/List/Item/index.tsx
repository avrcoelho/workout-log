import React, { memo } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import { Container, Column, ButtonDelete } from './styles';

interface Props {
  id: string;
  type: string;
  time: string;
  date: string;
  handleDelete(id: string): void;
}

const Item: React.FC<Props> = ({ id, time, type, date, handleDelete }) => {
  return (
    <Container>
      <Column>{type}</Column>
      <Column>{time}</Column>
      <Column className="space-between">
        {date}
        <ButtonDelete type="button" onClick={() => handleDelete(id)}>
          <FaTimesCircle size={18} color="#c53030" />
        </ButtonDelete>
      </Column>
    </Container>
  );
};

export default memo(Item);
