import { IsNotEmpty, IsString } from 'class-validator';


export class updateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}