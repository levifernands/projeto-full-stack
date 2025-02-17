import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { PasswordValidationHelper } from '../helpers/passwordValidation.helper';
import { CustomMessagesHelper } from '../helpers/customMessages.helper';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Primeiro nome do usuário',
    example: 'João',
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Último nome do usuário',
    example: 'Silva',
  })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'joao.silva@email.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(PasswordValidationHelper.password, {
    message: CustomMessagesHelper.PASSWORD_RULE,
  })
  @ApiProperty({
    description: 'Senha do usuário (deve seguir regras de complexidade)',
    example: 'Senha@123',
  })
  password: string;
}