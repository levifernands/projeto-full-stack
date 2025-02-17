import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'Email do usuário para login' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Senha do usuário para login' })
  password: string;
}