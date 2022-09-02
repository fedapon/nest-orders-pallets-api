import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../production/models/order.entity';
import { Pallet } from '../production/models/pallet.entity';
import { OrderController } from './controllers/order/order.controller';
import { PalletController } from './controllers/pallet/pallet.controller';
import { PalletService } from './services/pallet/pallet.service';
import { OrderService } from './services/order/order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Pallet])],
  controllers: [OrderController, PalletController],
  providers: [PalletService, OrderService],
})
export class ProductionModule {}
