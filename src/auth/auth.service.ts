import { Injectable } from '@nestjs/common';
import User from './User';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  private readonly users: User[];
  constructor(private readonly jwtService: JwtService) {
    this.users = [
      {
        userId: 1,
        username: 'liutao',
        password: 'liutao',
        detail:'面塑'
      },
      {
        userId: 2,
        username: 'liutao2',
        password: 'liutao2',
        detail:'邮箱'
      },
      {
        userId: 3,
        username: 'liutao3',
        password: 'liutao3',
        detail:'高度'
      },
    ];
  }
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  // 登录，签发token
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    /*return {
      accessToken: this.jwtService.sign(payload),
    };*/
    return this.jwtService.sign(payload)
  }
}
