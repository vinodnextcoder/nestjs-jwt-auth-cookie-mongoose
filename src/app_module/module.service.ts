import { Injectable } from "@nestjs/common";
import { LoggerService } from '../common/service/logger.service';
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Modules } from "./schemas/modules.schema";
import { v4 as uuid } from 'uuid';

@Injectable()
export class ModulesService {
  constructor(
    @InjectModel(Modules.name) private readonly appModel: Model<Modules>,
    private readonly logger: LoggerService
  ) { }

  async create(product: any): Promise<any> {
    const id: string = uuid();
    this.logger.log('modules service create called', id, 'modules.service.ts', '', '', 'create-service');

    const createProduct = await this.appModel.create(product);
    return createProduct;
  }

  async findAll(): Promise<any[]> {
    const id: string = uuid();
    this.logger.log('modules service findall called', id, 'modules.service.ts', '', '', 'findAll-service');
    return this.appModel.find().exec();
  }
  
}
