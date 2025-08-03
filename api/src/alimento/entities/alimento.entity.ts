import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Categoria } from './categoria.entity';

@Entity('alimento', { schema: "public" })

export class Alimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: false })
  url: string;

  @ManyToOne(type => Categoria, categoria => categoria.id)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  //  @ManyToOne(type => HistoricoSolicitacao, historico => historico.id)
  //   @JoinColumn({ name: 'ultimo_historico_id' })
  //   historico: number;

    constructor(partial: Partial<Alimento>) {
        Object.assign(this, partial);
    }

}
