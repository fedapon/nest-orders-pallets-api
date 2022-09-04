import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @ApiPropertyOptional({
    example: 100,
  })
  @IsOptional()
  @IsNumber()
  productNumber?: number;

  @ApiPropertyOptional({
    example: 'Producto 100',
  })
  @IsOptional()
  productDescription?: string;

  @ApiPropertyOptional({
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  machineNumber?: number;

  @ApiPropertyOptional({
    example: 0,
    type: String,
  })
  @IsOptional()
  @IsNumber()
  status?: number;

  @ApiPropertyOptional({
    example: 0,
    type: String,
  })
  @IsOptional()
  @IsNumber()
  readed?: number;
}
