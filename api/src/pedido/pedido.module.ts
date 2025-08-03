import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Pedido } from './entities/pedido.entity';
import { PedidoAlimento } from './entities/pedido-alimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, PedidoAlimento])],
  providers: [PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}
