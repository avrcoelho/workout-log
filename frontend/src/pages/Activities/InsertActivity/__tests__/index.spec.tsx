import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import * as InsertActivityActions from '../../../../store/modules/insertActivity/actions';

import InsertActivity from '..';

jest.mock('react-redux');

const selectorMocked = useSelector as jest.Mock<typeof useSelector>;
const dispatchMocked = useDispatch as jest.Mock<typeof useDispatch>;

describe('Activities Page', () => {
  it('should be able to insert activity', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        insertActivity: {
          loading: false,
        },
        activities: {
          data: [],
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { getByPlaceholderText, getByText, debug } = render(
      <InsertActivity />,
    );

    const typeField = getByPlaceholderText('Tipo');
    const timeField = getByPlaceholderText('Tempo');
    const dateField = getByPlaceholderText('Data');

    const buttonElement = getByText('Inserir');

    await act(async () => {
      fireEvent.change(typeField, { target: { value: 'run' } });
      fireEvent.change(timeField, { target: { value: '02:00' } });
      fireEvent.focus(dateField);

      await waitFor(() => {
        fireEvent.click(getByText('20'));
      });

      fireEvent.click(buttonElement);
    });

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(
        InsertActivityActions.loadRequest({
          type: 'run',
          time: '02:00',
          date: new Date('2020-09-20T03:00:00.000Z'),
        }),
      );
    });

    expect(getByText('Inserir')).toBeTruthy();
  });

  it('should be able to don´t insert', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        insertActivity: {
          loading: false,
        },
        activities: {
          data: [],
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { getByText } = render(<InsertActivity />);

    const buttonElement = getByText('Inserir');

    await act(async () => {
      fireEvent.click(buttonElement);
    });

    expect(dispatch).not.toHaveBeenCalledWith();
    expect(getByText('Inserir')).toBeTruthy();
  });

  it('should be able to render icon loading', async () => {
    selectorMocked.mockImplementation((callback: any) =>
      callback({
        insertActivity: {
          loading: true,
        },
        activities: {
          data: [],
        },
      }),
    );

    const dispatch = jest.fn();

    dispatchMocked.mockReturnValue(dispatch);

    const { container } = render(<InsertActivity />);

    expect(container.querySelector('.icon-spin')).toBeTruthy();
  });
});
