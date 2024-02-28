
import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { LoggerService } from "../common/service/logger.service";
import { RolesService } from "./roles.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Roles, RolesSchema } from "./schemas/roles.schema";


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Roles.name, schema: RolesSchema }
    ]),
  ],
  providers: [
    LoggerService,
    RolesService
  ],
  controllers: [RolesController]
})
export class roleModule { }
