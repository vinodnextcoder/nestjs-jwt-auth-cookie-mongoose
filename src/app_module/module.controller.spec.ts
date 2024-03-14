import { Test, TestingModule } from '@nestjs/testing';
import { ModulesController } from './module.controller';
import { LoggerService } from '../common/service/logger.service';

describe('RolesController', () => {
  let controller: ModulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulesController],
      providers: [
        {
          provide: LoggerService,
          useValue: {
            log: jest.fn(),
          },
        }
      ],
    }).compile();

    controller = module.get<ModulesController>(ModulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
