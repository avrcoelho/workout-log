import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import * as SignInActions from '../../../store/modules/signIn/actions';

import SingIn from '..';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('react-redux');

const selectorMocked = useSelector as jest.Mock<typeof useSelector>;
const dispatchMocked = useDispatch as jest.Mock<typeof useDispatch>;

describe('SignIn Page', () => {
  it('should be able to sign in', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        signIn: {
          loading: false,
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { getByPlaceholderText, getByText } = render(<SingIn />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    await act(async () => {
      fireEvent.change(emailField, { target: { value: 'johndoe@test.com' } });
      fireEvent.change(passwordField, { target: { value: '123456' } });

      fireEvent.click(buttonElement);
    });

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(
        SignInActions.loadRequest({
          email: 'johndoe@test.com',
          password: '123456',
        }),
      );
    });

    expect(getByText('Entrar')).toBeTruthy();
  });

  it('should be able to don´t sign in', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        signIn: {
          loading: false,
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { getByText } = render(<SingIn />);

    const buttonElement = getByText('Entrar');

    await act(async () => {
      fireEvent.click(buttonElement);
    });

    expect(dispatch).not.toHaveBeenCalledWith();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('should be able to render icon loading', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        signIn: {
          loading: true,
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { container } = render(<SingIn />);

    expect(container.querySelector('.icon-spin')).toBeTruthy();
  });
});
