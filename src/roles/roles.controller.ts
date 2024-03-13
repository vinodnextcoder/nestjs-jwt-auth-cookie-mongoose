import { Body, Controller, Get, HttpStatus, Injectable, Post, Res, UseFilters, UsePipes, ValidationPipe, Version } from '@nestjs/common';
import { Public } from "../common/decorators";
import { HttpCode } from '@nestjs/common';
import { LoggerService } from '../common/service/logger.service';
import { v4 as uuid } from 'uuid';
import { HttpExceptionFilter } from 'src/utils/http-exception.filter';
import { statusMessage } from '../constant/statusMessage';
import { sendResponse } from '../utils/index';
import { RolesService } from './roles.service';


@Injectable()
@Controller('v1/roles')
export class RolesController {
  constructor(
    private readonly rolesService :RolesService,
    private readonly logger: LoggerService
  ) { }

  @Public()
  @HttpCode(200)
  @Get()
  async helloWorld(): Promise<string> {
    const id: string = uuid();
    this.logger.log('roles controller called', id, 'roles.controler.ts', 'GET', '/', 'roles');
    return 'Hello World!';
  }

  @Public()
  @HttpCode(200)
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe({ transform: true }))
  @Version('1')
  @Post('/add')
  async addRole(@Body() productDto: any, @Res() res: Response): Promise<string> {
    console.log(productDto)
    const id: string = uuid();
    this.logger.log('roles controller called', id, 'roles.controler.ts', 'POST', '/', 'roles');
    const prod = await this.rolesService.create(productDto);
    return sendResponse(
      res,
      HttpStatus.OK,
      statusMessage[HttpStatus.OK],
      true,
      null
    );
  }


  @Public()
  @HttpCode(200)
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe({ transform: true }))
  @Version('1')
  @Get('/list')
  async getRoles(@Res() res: Response): Promise<any[]> {
    const id: string = uuid();
    this.logger.log('roles controller called', id, 'roles.controler.ts', 'POST', '/', 'roles');
    const rolesList = await this.rolesService.findAll();
    return sendResponse(
      res,
      HttpStatus.OK,
      statusMessage[HttpStatus.OK],
      true,
      rolesList
    );
  }
}
