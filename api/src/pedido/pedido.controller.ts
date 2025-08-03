import { Controller, Get, Post, Body, Put , Param, ParseIntPipe} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody} from '@nestjs/swagger';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { PedidoService } from './pedido.service';

@Controller('pedido')
export class PedidoController {
    
    constructor(private readonly pedidoServico: PedidoService) {}


    @Post()
    @ApiOperation({ summary: 'Cadastrar novo pedido' })
    @ApiBody({ type: CreatePedidoDto, required: false })
    @ApiResponse({ status: 200, description: 'Pedido cadastrado com sucesso.' })
    async create(@Body() createPedidoDto: CreatePedidoDto) {

        try{
            return await this.pedidoServico.create(createPedidoDto);
        }
        catch(err) {
            console.log("Error creating pedido:", err);
            return { message: 'Erro ao cadastrar pedido.' };
        }
    }

    // @Get()
    // @ApiOperation({ summary: 'Listar todos os usuários' })
    // @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
    
    @Get(':user_id')
    @ApiOperation({ summary: 'Listar pedidos de um usuário' })
    @ApiResponse({ status: 200, description: 'Lista de pedidos do usuário retornada com sucesso.' })
    async findAll(@Param('user_id', new ParseIntPipe()) user_id: number) {
        return await this.pedidoServico.findByUser(user_id);
    }

    
}
