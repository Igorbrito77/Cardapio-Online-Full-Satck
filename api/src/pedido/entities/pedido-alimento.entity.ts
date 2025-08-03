import { Alimento } from 'src/alimento/entities/alimento.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity('pedido_alimento', { schema: "public" })

export class PedidoAlimento {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Alimento, alimento => alimento.id)
    @JoinColumn({ name: 'alimento_id' })
    alimento: Alimento;

    @ManyToOne(type => Pedido, pedido => pedido.id)
    @JoinColumn({ name: 'pedido_id' })
    pedido: Pedido;


}
