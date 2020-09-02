export default interface IInsertActivityDTO {
  user_id: string;
  time: string;
  type: 'run' | 'bike' | 'swimming';
  date: Date;
}
