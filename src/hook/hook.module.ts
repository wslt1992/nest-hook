import { Module } from '@nestjs/common';
import { HookController } from './hook.controller';
import { HookService } from './hook.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from '../entity/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [HookController],
  providers: [HookService]
})
export class HookModule {}
