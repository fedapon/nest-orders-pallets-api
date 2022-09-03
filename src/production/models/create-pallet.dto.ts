import { Order } from './order.entity';

export class CreatePalletDto {
  orderId: Order;
  amountBoxies: number;
  readed?: number;
}
