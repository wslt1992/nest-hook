import { NestMiddleware } from '@nestjs/common';
import { ForbiddenException } from '../filter/ForbeddenException';

export class LoggerMiddleware implements NestMiddleware{
  use(req: any, res: any, next: () => void): any {
    console.log('logger middle')
    next()
  }

}
