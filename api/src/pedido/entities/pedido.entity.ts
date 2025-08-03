import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pedido', { schema: "public" })

export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  usuario_id: number;

  @Column()
  data: Date;

}
