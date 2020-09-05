import React from 'react';
import { render } from '@testing-library/react';

import Input from '..';

const mockedError = jest.fn();

mockedError.mockImplementation(() => undefined);

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: mockedError(),
        registerField: jest.fn(),
      };
    },
  };
});

describe('InputMask component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText, queryByText } = render(
      <Input name="time" mask="99:99" placeholder="Time" />,
    );

    expect(getByPlaceholderText('Time')).toBeTruthy();
    expect(queryByText('Cmapo obrigatório')).toBeFalsy();
  });

  it('should be able to show message error', () => {
    mockedError.mockImplementation(() => 'Cmapo obrigatório');

    const { queryByText } = render(
      <Input name="time" mask="99:99" placeholder="Time" />,
    );

    expect(queryByText('Cmapo obrigatório')).toBeTruthy();
  });
});
