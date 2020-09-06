import { Activity } from '../store/modules/activities/types';

const sumOfActivityTime = (activities: Activity[]): string => {
  const totalTime = activities.reduce(
    (acumulator, activity) => {
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

      let hours = ~~activityHours + acumulatorHours;

      let minutes = ~~activityMinutes + acumulatorMinutes;

      hours = ~~(hours + minutes / 60);
      minutes = minutes % 60;

      let seconds = ~~activitySeconds + acumulatorSeconds;

      minutes = ~~(minutes + seconds / 60);
      seconds = seconds % 60;

      return [hours, minutes, seconds];
    },
    [0, 0, 0],
  );

  const [hours, minutes] = totalTime;

  return `${hours}h${minutes}min`;
};

export default sumOfActivityTime;
