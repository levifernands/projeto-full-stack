import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { PasswordValidationHelper } from '../helpers/passwordValidation.helper';

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
  @Matches(PasswordValidationHelper.password)
  password: string;
}