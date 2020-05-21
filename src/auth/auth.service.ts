import { Injectable } from '@nestjs/common';
import User from './User';
@Injectable()
export class AuthService {
  private readonly users: User[];
  constructor() {
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
}
