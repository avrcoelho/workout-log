import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { useSelector } from 'react-redux';

import * as SignInActions from '../../../store/modules/signIn/actions';

import SingIn from '..';

const dispatch = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => dispatch,
}));

const selectorMocked = useSelector as jest.Mock<typeof useSelector>;

describe('SignIn Page', () => {
  it('should be able to sign in', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        signIn: {
          loading: false,
        },
      }),
    );

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
});
