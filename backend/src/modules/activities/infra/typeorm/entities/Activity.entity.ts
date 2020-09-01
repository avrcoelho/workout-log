import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Users from '@modules/users/infra/typeorm/entities/User.entity';

@Entity('activities')
class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  time: string;

  @Column({
    type: 'enum',
    enum: ['run', 'bike', 'swimming'],
  })
  type: 'run' | 'bike' | 'swimming';

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Users, (user) => user.activities)
  @JoinColumn({ name: 'user_id' })
  user: Users;
}

export default Activity;
