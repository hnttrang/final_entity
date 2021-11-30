import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';


@Entity('Bank')
export class Bank {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column()
  cardHolderName: string;

  @Column()
  creditNumber: string;

  @ManyToOne(() => User, (user: User) => user.id)
  userId: User;
}