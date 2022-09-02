import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../../models/order.entity';
import { CreateOrderDto } from 'src/production/models/create-order.dto';
import { UpdateOrderDto } from 'src/production/models/update-order.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private repository: Repository<Order>) {}

  async findAll(): Promise<Order[] | undefined> {
    return await this.repository.find();
  }

  async findOneById(orderId: number): Promise<Order | undefined> {
    return await this.repository.findOneBy({ orderId });
  }

  async create(dto: CreateOrderDto): Promise<Order> {
    const order: Order = await this.repository.create(dto);
    return await this.repository.save(order);
  }

  async update(orderId: number, dto: UpdateOrderDto): Promise<UpdateResult> {
    return await this.repository.update(orderId, dto);
  }

  async delete(orderId: number): Promise<DeleteResult> {
    return await this.repository.delete(orderId);
  }
}
