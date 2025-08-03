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

export class CreatePedidoDto {

    @ApiProperty({ type: Number })
    @IsInt()
    usuario_id: number;


    @ApiProperty({ type: [Number] })
    @IsArray()
    @IsInt({ each: true })
    alimento_ids: number[];
}