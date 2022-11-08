import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  // This decorator transform any input type to a number
  @IsOptional()
  @IsPositive()
  limit: number;
  @IsOptional()
  @IsPositive()
  offset: number;
}
