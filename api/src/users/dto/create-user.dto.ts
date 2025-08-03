import { ApiProperty } from '@nestjs/swagger';

import {
    IsNumber,
    ValidateNested,
    IsArray,
    IsString,
    IsInt,
    IsOptional,
    ArrayMinSize,
} from 'class-validator';

export class CreateUserDto {

  @ApiProperty({ type: String })
  @IsString()
  nome: string;

  @ApiProperty({ type: String })
  @IsString()
  email: string;

}