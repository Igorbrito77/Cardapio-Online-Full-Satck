import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('base')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Dar oi' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
  getHello(): string {
    return this.appService.getHello();
  }
}
