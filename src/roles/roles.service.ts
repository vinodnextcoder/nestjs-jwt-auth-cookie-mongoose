import { Injectable } from "@nestjs/common";
import { LoggerService } from '../common/service/logger.service';
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Roles } from "./schemas/roles.schema";
import { v4 as uuid } from 'uuid';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles.name) private readonly roleModel: Model<Roles>,
    private readonly logger: LoggerService
  ) { }

  async create(product: any): Promise<any> {
    const id: string = uuid();
    this.logger.log('Roles service create called', id, 'Roles.service.ts', '', '', 'create-service');

    const createProduct = await this.roleModel.create(product);
    return createProduct;
  }

  
}
