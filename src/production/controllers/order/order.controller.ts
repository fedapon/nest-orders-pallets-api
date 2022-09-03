import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrderDto } from '../../models/create-order.dto';
import { UpdateOrderDto } from '../../models/update-order.dto';
import { Order } from '../../models/order.entity';
import { OrderService } from '../../services/order/order.service';
import { DeleteResult, UpdateResult } from 'typeorm';
@Controller('api/orders')
export class OrderController {
  constructor(private ordeService: OrderService) {}

  @Get('')
  findAll() {
    return this.ordeService.findAll();
  }

  @Get(':orderId')
  findOneById(@Param('orderId') orderId: number) {
    const data = this.ordeService.findOneById(orderId);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  @Post()
  create(@Body() dto: CreateOrderDto): Promise<Order> {
    return this.ordeService.create(dto);
  }

  @Patch(':orderId')
  update(
    @Param('orderId') orderId: number,
    @Body() dto: UpdateOrderDto,
  ): Promise<UpdateResult> {
    return this.ordeService.update(orderId, dto);
  }

  @Delete(':orderId')
  delete(@Param(':orderId') orderId: number): Promise<DeleteResult> {
    return this.ordeService.delete(orderId);
  }
}
