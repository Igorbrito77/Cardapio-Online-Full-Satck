import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Alimento } from './entities/alimento.entity';

@Injectable()
export class AlimentoService {
  constructor(
    @InjectRepository(Alimento)
    private readonly alimentoRepository: Repository<Alimento>,
  ) {}

  async findAll(): Promise<Alimento[]> {

    return await this.alimentoRepository.createQueryBuilder('alimento')
                                        .select(['alimento.id as id', 'alimento.nome as nome', 'alimento.url as foto_url', 'categoria.id as categoria_id', 
                                                'categoria.nome as categoria'])
                                        .leftJoinAndSelect('alimento.categoria', 'categoria')
                                        .getRawMany();
  }

}
