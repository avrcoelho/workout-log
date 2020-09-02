import { IsNotEmpty, IsIn, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class InsertActivityDTO {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  time: string;

  @IsIn(['run', 'bike', 'swimming'])
  @ApiProperty({ enum: ['run', 'bike', 'swimming'] })
  type: 'run' | 'bike' | 'swimming';

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({ type: Date })
  date: Date;
}

export default InsertActivityDTO;
