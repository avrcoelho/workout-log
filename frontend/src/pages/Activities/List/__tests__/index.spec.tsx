import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import * as ActivitiesActions from '../../../../store/modules/activities/actions';
import * as DeleteActivityActions from '../../../../store/modules/deleteActivity/actions';

import List from '..';

jest.mock('react-redux');

const selectorMocked = useSelector as jest.Mock<typeof useSelector>;
const dispatchMocked = useDispatch as jest.Mock<typeof useDispatch>;

describe('List activities component', () => {
  it('should be able render list and dispatch', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        activities: {
          data: [
            {
              id: '1',
              user_id: '123',
              type: 'run',
              time: '03:00:00',
              date: new Date().toISOString(),
            },
            {
              id: '2',
              user_id: '124',
              type: 'bike',
              time: '03:00:00',
              date: new Date().toISOString(),
            },
          ],
        },
        deleteActivity: {
          id: null,
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { container } = render(<List />);

    expect(dispatch).toHaveBeenCalledWith(ActivitiesActions.loadRequest());

    expect(container.querySelectorAll('li')).toHaveLength(3);
  });

  it('should be able to call handleDelete', () => {
    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { getAllByRole } = render(<List />);

    const buttonElement = getAllByRole('button')[0];

    fireEvent.click(buttonElement);

    expect(dispatch).toHaveBeenCalledWith(
      DeleteActivityActions.loadRequest('1'),
    );
  });

  it('should be able to show total time', () => {
    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { queryByText } = render(<List />);

    expect(queryByText(/6h00min/)).toBeTruthy();
  });
});
