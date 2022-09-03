import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: 100,
  })
  @IsNotEmpty()
  @IsDecimal()
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
  @IsDecimal()
  machineNumber: number;
}
