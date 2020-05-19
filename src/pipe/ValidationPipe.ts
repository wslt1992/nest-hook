import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class ValidationPipe implements PipeTransform{
  private readonly id: any;
  constructor(id) {
    this.id = id
  }

  transform(value: any, metadata: ArgumentMetadata): any {
    console.log('Validation pipe'+ this.id)
    return value;
  }

}
