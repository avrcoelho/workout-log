import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'password_confimation', async: false })
class PasswordConfirmationValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return text === args.object['password'];
  }
}

export default PasswordConfirmationValidator;
