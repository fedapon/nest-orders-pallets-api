import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { Order } from './order.entity';

export class UpdatePalletDto {
  @ApiPropertyOptional({
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  orderId?: Order;

  @ApiPropertyOptional({
    example: 48,
  })
  @IsOptional()
  @IsNumber()
  amountBoxies?: number;

  @ApiPropertyOptional({
    example: 0,
  })
  @IsOptional()
  @IsNumber()
  readed?: number;
}
