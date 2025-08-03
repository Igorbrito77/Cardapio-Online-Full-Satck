import { Controller, Get, Post, Body, Put , Param, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiBody} from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiOperation({ summary: 'Listar todos os usuários' })
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Cadastrar novo usuário (brabamente)' })
    @ApiBody({ type: CreateUserDto, required: false })
    @ApiResponse({ status: 200, description: 'Usuário cadastrado com sucesso.' })
    async create(@Body() createUserDto: CreateUserDto) {

        try{
            return await this.usersService.create(createUserDto);
        }
        catch(err) {
            console.error('Error creating user:', err);
            return { message: 'Erro ao cadastrar usuário.' };
        }
    }


    @Put(':user_id')
    @ApiOperation({ summary: 'Editar usuário' })
    @ApiBody({ type: CreateUserDto, required: false })
    @ApiResponse({ status: 200, description: 'Usuário editado com sucesso.' })
    async update(@Param('user_id', new ParseIntPipe()) user_id: number, @Body() createUserDto: CreateUserDto) {

        try{
            await this.usersService.edit(user_id, createUserDto);

            return { message: 'Usuário editado com sucesso.' };
        }
        catch(err) {
            console.error('Error updating user:', err);
            return { message: 'Erro ao editar usuário.' };
        }
    }

    @Post('/login')
    @ApiOperation({ summary: 'Realizar login' })
    @ApiBody({ type: LoginDto, required: false })
    @ApiResponse({ status: 200, description: 'Login efetuado com sucesso.' })
    async login(@Body() createUserDto: LoginDto) {

        try{
 
            const user = await this.usersService.login(createUserDto);

            if(user) {
                return { code: 0, message: 'Login efetuado com sucesso.', user_id: user.id, user_name: user.nome};
            }
            else {
                return { code: -1, message: 'Usuário ou senha inválidos.',  user_id: null, user_name: null};
            }
        }
        catch(err) {
            console.error('Erro interno ao efetuar login:', err);
            return { message: 'Erro interno ao efetuar login.' };
        }
    }
}
