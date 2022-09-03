import { Order } from './order.entity';

export class UpdatePalletDto {
  orderId?: Order;
  amountBoxies?: number;
  readed?: number;
}
