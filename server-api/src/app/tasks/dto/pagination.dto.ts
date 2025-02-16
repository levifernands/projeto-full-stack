import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationDTO {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  skip: number;
  number: number;
}