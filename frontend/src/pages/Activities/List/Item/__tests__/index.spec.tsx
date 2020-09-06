import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Item from '..';

describe('Item list component', () => {
  const handleDeleteMocked = jest.fn();

  const props = {
    id: '123',
    type: 'bike',
    time: '1h00min',
    date: '12/10/2020',
    handleDelete: handleDeleteMocked,
  };

  it('should be abel to render props', () => {
    const { getByText } = render(<Item {...props} />);

    expect(getByText(props.type)).toBeTruthy();
    expect(getByText(props.time)).toBeTruthy();
    expect(getByText(props.date)).toBeTruthy();
  });

  it('should be abel to call handleDelete', () => {
    const { getByRole } = render(<Item {...props} />);

    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(handleDeleteMocked).toHaveBeenCalledWith(props.id);
  });
});
