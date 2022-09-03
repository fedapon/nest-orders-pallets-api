import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @ApiProperty({
    example: 1,
  })
  @PrimaryGeneratedColumn({
    name: 'order_id',
  })
  orderId: number;

  @ApiProperty({
    example: 100,
  })
  @Column({
    name: 'product_number',
    nullable: false,
  })
  productNumber: number;

  @ApiProperty({
    example: 'Producto 100',
  })
  @Column({
    name: 'product_description',
    nullable: false,
  })
  productDescription: string;

  @ApiProperty({
    example: 1,
  })
  @Column({
    name: 'machine_number',
    nullable: false,
  })
  machineNumber: number;

  @ApiProperty({
    example: 0,
  })
  @Column({
    default: 0,
  })
  status: number;

  @ApiProperty({
    type: String,
    example: '2022-06-15T09:03:09.000Z',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: 0,
  })
  @Column({
    default: 0,
  })
  readed: number;
}
