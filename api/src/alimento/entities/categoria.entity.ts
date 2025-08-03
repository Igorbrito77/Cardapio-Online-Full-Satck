import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categoria', { schema: "public" })

export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

}
