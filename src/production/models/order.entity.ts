import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn({
    name: 'order_id',
  })
  orderId: number;

  @Column({
    name: 'product_number',
    nullable: false,
  })
  productNumber: number;

  @Column({
    name: 'product_description',
    nullable: false,
  })
  productDescription: string;

  @Column({
    name: 'machine_number',
    nullable: false,
  })
  machineNumber: number;

  @Column({
    default: 0,
  })
  status: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({
    default: 0,
  })
  readed: number;
}
