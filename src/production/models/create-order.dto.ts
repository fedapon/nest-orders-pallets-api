import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: 100,
  })
  @IsNotEmpty()
  @IsNumber()
  productNumber: number;

  @ApiProperty({
    example: 'Producto 100',
  })
  @IsNotEmpty()
  productDescription: string;

  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  machineNumber: number;
}
