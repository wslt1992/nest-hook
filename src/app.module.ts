import { MiddlewareConsumer, Module, NestModule, UseGuards } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HookModule } from './hook/hook.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [HookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('hook')
  }
}
