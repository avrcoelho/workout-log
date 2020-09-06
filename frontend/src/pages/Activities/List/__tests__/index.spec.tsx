import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import * as ActivitiesActions from '../../../../store/modules/activities/actions';

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
              time: '03:00',
              date: new Date().toISOString(),
            },
            {
              id: '2',
              user_id: '124',
              type: 'bike',
              time: '03:00',
              date: new Date().toISOString(),
            },
          ],
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { container } = render(<List />);

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(ActivitiesActions.loadRequest());
    });

    expect(container.querySelectorAll('li')).toHaveLength(3);
  });
});
