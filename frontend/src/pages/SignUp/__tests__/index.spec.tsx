import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import * as SignUpActions from '../../../store/modules/signUp/actions';

import SingUp from '..';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('react-redux');

const selectorMocked = useSelector as jest.Mock<typeof useSelector>;
const dispatchMocked = useDispatch as jest.Mock<typeof useDispatch>;

describe('SignUp Page', () => {
  it('should be able to sign up', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        signUp: {
          loading: false,
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { getByPlaceholderText, getByText } = render(<SingUp />);

    const fullnameField = getByPlaceholderText('Nome completo');
    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const passwordConfirmationField = getByPlaceholderText('Confirmar senha');
    const buttonElement = getByText('Criar');

    await act(async () => {
      fireEvent.change(fullnameField, { target: { value: 'John Doe' } });
      fireEvent.change(emailField, { target: { value: 'johndoe@test.com' } });
      fireEvent.change(passwordField, { target: { value: '123456' } });
      fireEvent.change(passwordConfirmationField, {
        target: { value: '123456' },
      });

      fireEvent.click(buttonElement);
    });

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(
        SignUpActions.loadRequest({
          fullname: 'John Doe',
          email: 'johndoe@test.com',
          password: '123456',
          password_confirmation: '123456',
        }),
      );
    });

    expect(getByText('Criar')).toBeTruthy();
  });

  it('should be able to don´t sign up', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        signUp: {
          loading: false,
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { getByText } = render(<SingUp />);

    const buttonElement = getByText('Criar');

    await act(async () => {
      fireEvent.click(buttonElement);
    });

    expect(dispatch).not.toHaveBeenCalledWith();
    expect(getByText('Criar')).toBeTruthy();
  });

  it('should be able to render icon loading', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        signUp: {
          loading: true,
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { container } = render(<SingUp />);

    expect(container.querySelector('.icon-spin')).toBeTruthy();
  });
});
