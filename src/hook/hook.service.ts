import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from '../entity/photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HookService {
  constructor(@InjectRepository(Photo) private readonly photoRepository: Repository<Photo>) {
  }
  getHello(){
    console.log('hook service')
    return 'hook hello'
  }
  findAll():Promise<Photo[]>{
    return this.photoRepository.find()
}
}
