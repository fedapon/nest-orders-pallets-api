import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pallet } from '../../models/pallet.entity';
import { CreatePalletDto } from 'src/production/models/create-pallet.dto';
import { UpdatePalletDto } from 'src/production/models/update-pallet.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PalletService {
  constructor(
    @InjectRepository(Pallet) private repository: Repository<Pallet>,
  ) {}

  async findAll(): Promise<Pallet[] | undefined> {
    return await this.repository.find();
  }

  async findOneById(palletId: number): Promise<Pallet | undefined> {
    return await this.repository.findOneBy({ palletId });
  }

  async create(dto: CreatePalletDto): Promise<Pallet> {
    const pallet: Pallet = await this.repository.create(dto);
    return await this.repository.save(pallet);
  }

  async update(palletId: number, dto: UpdatePalletDto): Promise<UpdateResult> {
    return await this.repository.update(palletId, dto);
  }

  async delete(palletId: number): Promise<DeleteResult> {
    return await this.repository.delete(palletId);
  }
}
