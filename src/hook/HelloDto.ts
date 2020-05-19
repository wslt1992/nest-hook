import { IsNotEmpty, IsNumber } from 'class-validator';

export class HelloDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  readonly age: number;
}
