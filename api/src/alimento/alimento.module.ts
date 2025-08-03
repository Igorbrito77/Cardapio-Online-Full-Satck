import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlimentoService } from './alimento.service';
import { AlimentoController } from './alimento.controller';
import { Alimento } from './entities/alimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alimento])],
  providers: [AlimentoService],
  controllers: [AlimentoController],
})
export class AlimentoModule {}
