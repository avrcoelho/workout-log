import { format } from 'date-fns';

import { Activity } from '../store/modules/activities/types';

const sumOfActivityTime = (activities: Activity[]): string => {
  const totalTime = activities.reduce(
    (acumulator, activity) => {
      const base = new Date(0);
      const prevTime = new Date(base);
      const actualTime = new Date(base);

      const [
        activityHours,
        activityMinutes,
        activitySeconds,
      ] = activity.time.split(':');

      const [
        acumulatorHours,
        acumulatorMinutes,
        acumulatorSeconds,
      ] = acumulator;

      prevTime.setUTCHours(
        acumulatorHours,
        acumulatorMinutes,
        acumulatorSeconds,
      );
      actualTime.setUTCHours(
        Number(activityHours),
        Number(activityMinutes),
        Number(activitySeconds),
      );

      const newTime = new Date(
        prevTime.getTime() + actualTime.getTime() - base.getTime(),
      );

      return [
        newTime.getUTCHours(),
        newTime.getUTCMinutes(),
        newTime.getUTCSeconds(),
      ];
    },
    [0, 0, 0],
  );

  const [hours, minuts, seconds] = totalTime;

  return format(new Date(0, 0, 0, hours, minuts, seconds, 0), "H'h'mm'min'");
};

export default sumOfActivityTime;
