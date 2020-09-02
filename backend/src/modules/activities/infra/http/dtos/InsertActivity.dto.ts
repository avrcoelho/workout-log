import { IsNotEmpty, IsIn, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class InsertActivityDTO {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  time: string;

  @IsIn(['run', 'bike', 'swimming'])
  @ApiProperty({ enum: ['run', 'bike', 'swimming'] })
  type: 'run' | 'bike' | 'swimming';

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ type: Date })
  date: Date;
}

export default InsertActivityDTO;
