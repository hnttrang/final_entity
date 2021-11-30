import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './User.entity';


@Entity('Bank')
export class BankEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  cardHolderName: string;

  @Column({ type: 'varchar', length: 20 })
  creditNumber: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.id)
  userId: UserEntity;
}