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
  @PrimaryGeneratedColumn({
    name: 'pallet_id',
  })
  palletId: number;

  @ManyToOne(() => Order, (order) => order.orderId, { nullable: false })
  @JoinColumn({ name: 'order_id' })
  orderId: Order;

  @Column({
    name: 'amount_boxies',
    nullable: false,
  })
  amountBoxies: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({
    default: 0,
  })
  readed: number;
}
