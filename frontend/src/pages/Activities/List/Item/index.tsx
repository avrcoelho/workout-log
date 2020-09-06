import React, { memo } from 'react';
import { FaTimesCircle, FaSpinner } from 'react-icons/fa';

import { Container, Column, ButtonDelete } from './styles';

interface Props {
  id: string;
  type: string;
  time: string;
  date: string;
  isLoading: boolean;
  handleDelete(id: string): void;
}

const Item: React.FC<Props> = ({
  id,
  time,
  type,
  date,
  handleDelete,
  isLoading,
}) => {
  return (
    <Container>
      <Column>{type}</Column>
      <Column>{time}</Column>
      <Column className="space-between">
        {date}
        <ButtonDelete type="button" onClick={() => handleDelete(id)}>
          {isLoading ? (
            <FaSpinner size={16} color="#c53030" className="icon-spin" />
          ) : (
            <FaTimesCircle size={18} color="#c53030" />
          )}
        </ButtonDelete>
      </Column>
    </Container>
  );
};

export default memo(Item);
