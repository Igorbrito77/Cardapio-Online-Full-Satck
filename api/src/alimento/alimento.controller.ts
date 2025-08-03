import { Controller, Get, Post, Body, Put , Param, ParseIntPipe} from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { ApiOperation, ApiResponse, ApiBody} from '@nestjs/swagger';

@Controller('alimento')
export class AlimentoController {
  constructor(private readonly usersService: AlimentoService) {}

    @Get()
    @ApiOperation({ summary: 'Listar todos os alimentos' })
    @ApiResponse({ status: 200, description: 'Lista de alimentos retornada com sucesso.' })
    async findAll() {
        return await this.usersService.findAll();
    }

}
