import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [PassportModule],
  controllers: [],
  providers: [AuthService,LocalStrategy],
})
export class AuthModule {

}