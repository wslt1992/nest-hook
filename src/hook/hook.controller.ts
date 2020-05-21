import {
  Controller,
  Get,
  HttpException,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { HookService } from './hook.service';
import { ValidationPipe } from '../pipe/ValidationPipe';
import { HelloDto } from './HelloDto';
import { AuthGuard } from '../guard/AuthGuard';
import { LoggingInterceptor } from '../interceptor/LoggingInterceptor';
import { HttpExceptionFilter } from '../filter/HttpExceptionFilter';
// import { ForbiddenException } from '../filter/ForbeddenException';

@Controller('hook')
export class HookController {
  constructor(private readonly hookService: HookService) {}

  @Get('hello')
  @UsePipes(new ValidationPipe('function'))
  @UseGuards(AuthGuard)
  @UseInterceptors(LoggingInterceptor)
  @UseFilters(HttpExceptionFilter)
  getHello(@Query() query: HelloDto): string {
    console.log('hook controller',query)
    return this.hookService.getHello();
  }
}
