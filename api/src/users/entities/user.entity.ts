import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario', { schema: "public" })

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  senha: string;
}
