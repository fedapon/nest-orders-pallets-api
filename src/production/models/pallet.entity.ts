import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'pallets' })
export class Pallet {
  @ApiProperty({
    example: 1,
  })
  @PrimaryGeneratedColumn({
    name: 'pallet_id',
  })
  palletId: number;

  @ApiProperty({
    type: () => Order,
  })
  @ManyToOne(() => Order, (order) => order.orderId, { nullable: false })
  @JoinColumn({ name: 'order_id' })
  orderId: Order;

  @ApiProperty({
    example: 48,
  })
  @Column({
    name: 'amount_boxies',
    nullable: false,
  })
  amountBoxies: number;

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
