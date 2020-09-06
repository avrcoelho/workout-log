import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';

import * as ActivitiesActions from '../../../store/modules/activities/actions';
import { ActivitiesState } from '../../../store/modules/activities/types';
import { ApplicationState } from '../../../store';

import ActivityItem from './Item';

import { Container, Item, Column } from './styles';

const List: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActivitiesActions.loadRequest());
  }, [dispatch]);

  const { data } = useSelector<ApplicationState, ActivitiesState>(
    state => state.activities,
  );

  const dataParsed = useMemo(() => {
    return data.map(activity => {
      const [parsedDate] = activity.date.split('T');

      return {
        ...activity,
        date: format(parseISO(activity.date), "dd'/'MM'/'yyyy"),
        time: format(parseISO(`${parsedDate} ${activity.time}`), "h'h'mm'min'"),
      };
    });
  }, [data]);

  return (
    <Container>
      <Item className="list-header">
        <Column>Tipo</Column>
        <Column>Tempo</Column>
        <Column>Data</Column>
      </Item>
      {dataParsed.map(activity => (
        <ActivityItem key={activity.id} {...activity} />
      ))}
    </Container>
  );
};

export default List;
