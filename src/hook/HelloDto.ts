import { IsNotEmpty, IsNumber, IsNumberString, IsString } from 'class-validator';

export class HelloDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNumberString()
  readonly age: number;
}
