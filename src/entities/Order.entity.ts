import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';
import { Bank } from './Bank.entity';

@Entity('Order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  status: 'progress' | 'done' | 'cancel';
  @Column()
  orderDate: Date;
  @Column()
  amount: number;
  @Column({ type: 'datetime' })
  paymentDate: Date;
  @ManyToOne(() => User, (user: User) => user.id)
  buyerId: User;
  @ManyToOne(() => Bank, (account: Bank) => account.id)
  bankId: Bank;
}