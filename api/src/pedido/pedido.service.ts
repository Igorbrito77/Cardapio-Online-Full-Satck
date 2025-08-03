import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository, Transaction, EntityManager } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { PedidoAlimento } from './entities/pedido-alimento.entity';
import { Alimento } from 'src/alimento/entities/alimento.entity';

@Injectable()
export class PedidoService {

    constructor(
        @InjectRepository(Pedido)
        private pedidoRepository: Repository<Pedido>,
        @InjectRepository(PedidoAlimento)
        private pedidoAlimentoRepository: Repository<PedidoAlimento>,
        private manager: EntityManager
    ) {}

    findAll(): Promise<Pedido[]> {
        return this.pedidoRepository.find();
    }

    // O decorator @Transaction() foi removido nas versões mais recentes do TypeORM e NestJS.
    // O recomendado agora é usar o método `DataSource#transaction` ou injetar o EntityManager manualmente.
    // Você pode remover o @Transaction() e gerenciar a transação diretamente no método ou serviço.
    async create(createPedidoDto: CreatePedidoDto
                
    ): Promise<Pedido> {

        const alimento_ids = createPedidoDto.alimento_ids;

        let pedido: Pedido = this.manager.create(Pedido, {
            usuario_id: createPedidoDto.usuario_id,
            data : new Date()
        });

        pedido = await this.manager.save(Pedido, pedido);
        
        
        
        let insertAlimentos: Partial<PedidoAlimento>[] = [];

        for(let alimento_id of alimento_ids) {
            insertAlimentos.push({
                pedido: { id: pedido.id } as Pedido,
                alimento: { id: alimento_id } as Alimento
            });
        }


        let a = await this.pedidoAlimentoRepository.save(insertAlimentos);
        console.log("Alimentos inseridos:", a);

        return pedido;

    }


    findByUser(user_id: number): Promise<Pedido[]> {

        return this.pedidoRepository
            .createQueryBuilder('p')
            .select(['p.id as id', 'p.numero as numero','p.data as data'])
            .addSelect(subQuery => {
                                        return subQuery
                                            .select('array_agg(json_build_object(\'id\', a.id, \'nome\', a.nome, \'categoria\', c.nome))', 'alimentos')
                                            .from(PedidoAlimento, 'pa')
                                            .innerJoin('pa.alimento', 'a')
                                            .innerJoin('a.categoria', 'c')
                                            .where('pa.pedido_id = p.id');
            }, 'alimentos')
            .where('p.usuario_id = :user_id', { user_id })
            .orderBy('p.data', 'DESC')
            .getRawMany();

    }

}
