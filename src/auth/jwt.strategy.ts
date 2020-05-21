import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  /**
   *
   * @param payload
   * @return 返回值如果为false，null等，表示没有通过验证
   */
  async validate(payload: any):Promise<any>{
    // 这个函数在守卫完成 token验证后 调用， 我可以在这里面进行其他的验证
    return { userId: payload.sub, username: payload.username,age:23 };
  }
}
