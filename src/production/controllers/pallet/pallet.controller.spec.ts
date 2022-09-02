import { Test, TestingModule } from '@nestjs/testing';
import { PalletController } from './pallet.controller';

describe('PalletController', () => {
  let controller: PalletController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalletController],
    }).compile();

    controller = module.get<PalletController>(PalletController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
