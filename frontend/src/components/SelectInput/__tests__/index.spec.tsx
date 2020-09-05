import React from 'react';
import { render } from '@testing-library/react';

import SelectInput from '..';

const mockedError = jest.fn();

mockedError.mockImplementation(() => undefined);

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'type',
        defaultValue: '',
        error: mockedError(),
        registerField: jest.fn(),
      };
    },
  };
});

describe('SelectInput component', () => {
  const options = [
    {
      value: 'run',
      title: 'Corrida',
    },
    {
      value: 'bike',
      title: 'Biclicleta',
    },
  ];

  it('should be able to render an select', () => {
    const { getByPlaceholderText, queryByText } = render(
      <SelectInput name="type" placeholder="Tipo" options={options} />,
    );

    expect(getByPlaceholderText('Tipo')).toBeTruthy();
    expect(queryByText('Cmapo obrigatório')).toBeFalsy();
  });

  it('should be able to show message error', () => {
    mockedError.mockImplementation(() => 'Cmapo obrigatório');

    const { queryByText } = render(
      <SelectInput name="type" placeholder="Tipo" options={options} />,
    );

    expect(queryByText('Cmapo obrigatório')).toBeTruthy();
  });

  it('should be able to show message error', () => {
    const { getByText } = render(
      <SelectInput name="type" placeholder="Tipo" options={options} />,
    );

    expect(getByText('Corrida')).toBeTruthy();
    expect(getByText('Biclicleta')).toBeTruthy();
  });
});
