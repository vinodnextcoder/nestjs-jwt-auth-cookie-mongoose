
import { Module } from "@nestjs/common";
import { LoggerService } from "../common/service/logger.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ModulesService } from "./module.service";
import { ModulesController } from "./module.controller";
import {  Modules, ModulesSchema } from "./schemas/modules.schema";


@Module({
  imports: [
    MongooseModule.forFeature([
      { name:  Modules.name, schema: ModulesSchema }
    ]),
  ],
  providers: [
    LoggerService,
    ModulesService
  ],
  controllers: [ModulesController]
})
export class app_Module { }
