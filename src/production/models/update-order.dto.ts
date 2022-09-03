import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDecimal, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @ApiPropertyOptional({
    example: 100,
  })
  @IsOptional()
  @IsDecimal()
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
  @IsDecimal()
  machineNumber?: number;

  @ApiPropertyOptional({
    example: 0,
  })
  @IsOptional()
  @IsDecimal()
  status?: number;

  @ApiPropertyOptional({
    example: 0,
  })
  @IsOptional()
  @IsDecimal()
  readed?: number;
}
