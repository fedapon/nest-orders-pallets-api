import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Order } from './order.entity';

export class CreatePalletDto {
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  orderId: Order;

  @ApiProperty({
    example: 48,
  })
  @IsNotEmpty()
  @IsNumber()
  amountBoxies: number;

  @ApiPropertyOptional({
    example: 0,
  })
  @IsOptional()
  @IsNumber()
  readed?: number;
}
