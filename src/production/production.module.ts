import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order/order.controller';
import { PalletController } from './controllers/pallet/pallet.controller';
import { PalletService } from './services/pallet/pallet.service';
import { OrderService } from './services/order/order.service';

@Module({
  controllers: [OrderController, PalletController],
  providers: [PalletService, OrderService],
})
export class ProductionModule {}
