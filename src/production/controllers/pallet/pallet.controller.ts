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
import { CreatePalletDto } from '../../models/create-pallet.dto';
import { UpdatePalletDto } from '../../models/update-pallet.dto';
import { Pallet } from '../../models/pallet.entity';
import { PalletService } from '../../services/pallet/pallet.service';
import { OrderService } from '../../services/order/order.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiBody, ApiExtraModels, ApiTags } from '@nestjs/swagger';

@ApiTags('Pallets')
@ApiExtraModels(Pallet)
@Controller('api/pallets')
export class PalletController {
  constructor(
    private palletService: PalletService,
    private orderService: OrderService,
  ) {}

  @Get()
  findAll() {
    return this.palletService.findAll();
  }

  @Get(':palletId')
  async findOneById(@Param('palletId') palletId: number) {
    const pallet = await this.palletService.findOneById(palletId);
    if (!pallet) {
      throw new NotFoundException('palletId not found');
    }
    return pallet;
  }

  @Post()
  @ApiBody({ type: CreatePalletDto })
  async create(@Body() dto: CreatePalletDto): Promise<Pallet> {
    const order = await this.orderService.findOneById(Number(dto.orderId));
    if (!order) {
      throw new NotFoundException('orderId not found');
    }
    return this.palletService.create(dto);
  }

  @Patch(':palletId')
  @ApiBody({ type: UpdatePalletDto })
  async update(
    @Param('palletId') palletId: number,
    @Body() dto: UpdatePalletDto,
  ): Promise<UpdateResult> {
    const pallet = await this.palletService.findOneById(palletId);
    if (!pallet) {
      throw new NotFoundException('palletId not found');
    }
    if (dto.orderId) {
      const order = await this.orderService.findOneById(Number(dto.orderId));
      if (!order) {
        throw new NotFoundException('orderId not found');
      }
    }
    return this.palletService.update(palletId, dto);
  }

  @Delete(':palletId')
  delete(@Param('palletId') palletId: number): Promise<DeleteResult> {
    return this.palletService.delete(palletId);
  }
}
