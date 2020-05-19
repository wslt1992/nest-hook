import { Injectable } from '@nestjs/common';

@Injectable()
export class HookService {
  getHello(){
    console.log('hook service')
    return 'hook hello'
  }
}
