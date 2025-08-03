import { Test, TestingModule } from '@nestjs/testing';
import { AlimentoController } from './alimento.controller';

describe('AlimentoController', () => {
  let controller: AlimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentoController],
    }).compile();

    controller = module.get<AlimentoController>(AlimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
