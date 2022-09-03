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
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('pallet')
export class PalletController {
  constructor(private palletService: PalletService) {}

  @Get('/')
  findAll() {
    return this.palletService.findAll();
  }

  @Get('/:orderId')
  findOneById(@Param('palletId') palletId: number) {
    const data = this.palletService.findOneById(palletId);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  @Post()
  create(@Body() dto: CreatePalletDto): Promise<Pallet> {
    return this.palletService.create(dto);
  }

  @Patch('palletId')
  update(
    @Param('palletId') orderId: number,
    @Body() dto: UpdatePalletDto,
  ): Promise<UpdateResult> {
    return this.palletService.update(orderId, dto);
  }

  @Delete('palletId')
  delete(@Param('palletId') palletId: number): Promise<DeleteResult> {
    return this.palletService.delete(palletId);
  }
}
