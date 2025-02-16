import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { PasswordValidationHelper } from '../helpers/passwordValidation.helper';
import { CustomMessagesHelper } from '../helpers/customMessages.helper';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(PasswordValidationHelper.password, {
    message: CustomMessagesHelper.PASSWORD_RULE,
  })
  password: string;
}