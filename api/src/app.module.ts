import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AlimentoModule } from './alimento/alimento.module';
import { Alimento } from './alimento/entities/alimento.entity';
import { Categoria } from './alimento/entities/categoria.entity';
import { PedidoModule } from './pedido/pedido.module';
import { Pedido } from './pedido/entities/pedido.entity';
import { PedidoAlimento } from './pedido/entities/pedido-alimento.entity';

  // const DB_HOST = 'db';
  //   const DB_PORT = '5432';
  //   const DB_USER = 'meuusuario';
  //   const DB_PASSWORD = 'minhasecreta';
  //   const DB_NAME = 'meubanco';


@Module({
imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // ou 'db' se for via Docker Compose
      port: 5432,
      username: 'meuusuario',
      password: 'minhasecreta',
      database: 'banco_projeto_nest',
      entities: [User, Alimento, Categoria, Pedido, PedidoAlimento],
      synchronize: false, // só em dev!
      logging: true,
    }),
    AlimentoModule, PedidoModule, UsersModule
  ],  controllers: [],
  providers: [],
})
export class AppModule {}
