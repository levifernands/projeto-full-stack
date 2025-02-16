import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationDTO {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsPositive()
  @IsOptional()
  page: number = 1;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsPositive()
  @IsOptional()
  limit: number = 10;
}