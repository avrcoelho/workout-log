import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import PasswordConfirmationValidator from '../validators/PasswordConfirmation.validator';

class CreateUserDTO {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  fullname: string;

  @IsEmail()
  @ApiProperty({ type: String })
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({ type: String, minLength: 6 })
  password: string;

  @IsNotEmpty()
  @MinLength(6)
  @Validate(PasswordConfirmationValidator, {
    message: 'password_confirmation don`t match with password',
  })
  @ApiProperty({ type: String, minLength: 6 })
  password_confirmation: string;
}

export default CreateUserDTO;
