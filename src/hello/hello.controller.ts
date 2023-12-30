import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { HttpCode } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { LoggerService } from '@nestjs/common/services/logger.service';

@Controller('')
export class HelloController {
  constructor(private readonly logger: LoggerService) {}

    @Public()
    @HttpCode(200) 
    @Get()
    helloWorld(): string {
      const id: string = uuid();
      this.logger.log('User login api called',id,'hello.controler.ts','GET','/','helloWorld');
      return 'Hello World!';
    }
}
