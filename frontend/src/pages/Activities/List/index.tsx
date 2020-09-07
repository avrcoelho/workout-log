import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as ActivitiesActions from '../../../store/modules/activities/actions';
import * as DeleteActivityActions from '../../../store/modules/deleteActivity/actions';
import { ActivitiesState } from '../../../store/modules/activities/types';
import { DeleteActivityState } from '../../../store/modules/deleteActivity/types';
import { ApplicationState } from '../../../store';

import ActivityItem from './Item';
import sumOfActivityTime from '../../../utils/sumOfActivityTime';
import formatDate from '../../../utils/formatDate';

import { Container, Item, Column, Total } from './styles';

const List: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActivitiesActions.loadRequest());
  }, [dispatch]);

  const { data } = useSelector<ApplicationState, ActivitiesState>(
    state => state.activities,
  );
  const { id: idSelected } = useSelector<ApplicationState, DeleteActivityState>(
    state => state.deleteActivity,
  );

  const dataParsed = useMemo(() => {
    return data.map(activity => {
      let parsedType = '';

      switch (activity.type) {
        case 'bike':
          parsedType = 'Bicileta';
          break;
        case 'run':
          parsedType = 'Corrida';
          break;
        default:
          parsedType = 'Natação';
      }

      const [hour, minute] = activity.time.split(':');

      return {
        ...activity,
        type: parsedType,
        date: formatDate(activity.date),
        time: `${hour}h${minute}min`,
      };
    });
  }, [data]);

  const totalTime = useMemo(() => sumOfActivityTime(data), [data]);

  const handleDelete = useCallback(
    (id: string) => {
      dispatch(DeleteActivityActions.loadRequest(id));
    },
    [dispatch],
  );

  return (
    <Container>
      <Item className="list-header">
        <Column>Tipo</Column>
        <Column>Tempo</Column>
        <Column>Data</Column>
      </Item>
      {dataParsed.map(activity => (
        <ActivityItem
          key={activity.id}
          {...activity}
          handleDelete={handleDelete}
          isLoading={idSelected === activity.id}
        />
      ))}
      <Total>Tempo total de exercícios: {totalTime}</Total>
    </Container>
  );
};

export default List;
