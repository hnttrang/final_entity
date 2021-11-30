import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './User.entity';
import { BankEntity } from './Bank.entity';
import { orderStatus } from 'src/interface/enum';

@Entity('Order')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({type: 'enum', enum: orderStatus})
  status: orderStatus;
  @Column({type: 'date'})
  orderDate: string;
  @Column()
  amount: number;
  @Column({ type: 'date' })
  paymentDate: string;
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.id)
  buyerId: UserEntity;
  @ManyToOne(() => BankEntity, (account: BankEntity) => account.id)
  bankId: BankEntity;
}