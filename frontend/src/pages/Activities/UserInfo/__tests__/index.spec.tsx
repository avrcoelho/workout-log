import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import * as SignInActions from '../../../../store/modules/signIn/actions';

import UserInfo from '..';

jest.mock('react-redux');

const selectorMocked = useSelector as jest.Mock<typeof useSelector>;
const dispatchMocked = useDispatch as jest.Mock<typeof useDispatch>;

describe('UserInfo component', () => {
  it('should be able render fullname', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        signIn: {
          data: {
            fullname: 'John Doe',
          },
        },
      }),
    );

    const { getByText } = render(<UserInfo />);

    expect(getByText('John Doe')).toBeTruthy();
  });

  it('should be able to dispatch logout', () => {
    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { getByRole } = render(<UserInfo />);

    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(dispatch).toHaveBeenCalledWith(SignInActions.logout());
  });
});
