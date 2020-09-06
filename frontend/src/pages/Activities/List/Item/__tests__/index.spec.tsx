import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Item from '..';

describe('Item list component', () => {
  const handleDeleteMocked = jest.fn();

  let props = {
    id: '123',
    type: 'bike',
    time: '1h00min',
    date: '12/10/2020',
    isLoading: false,
    handleDelete: handleDeleteMocked,
  };

  it('should be abel to render props', () => {
    const { getByText, container } = render(<Item {...props} />);

    expect(getByText(props.type)).toBeTruthy();
    expect(getByText(props.time)).toBeTruthy();
    expect(getByText(props.date)).toBeTruthy();
    expect(container.querySelector('.icon-spin')).toBeFalsy();
  });

  it('should be abel to call handleDelete', () => {
    props = {
      ...props,
      isLoading: true,
    };

    const { getByRole, container } = render(<Item {...props} />);

    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(handleDeleteMocked).toHaveBeenCalledWith(props.id);
    expect(container.querySelector('.icon-spin')).toBeTruthy();
  });
});
