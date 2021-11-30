import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { User } from './User.entity';
import { Bank } from './Bank.entity';
@Entity()
export class Order{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    status: 'progress' | 'done' | 'cancel'
    @Column()
    orderDate: Date
    @Column()
    amount: number
    @Column()
    paymentDate: number
    @ManyToOne(() => User, (user: User) => user.id)
    buyerId: User
    @ManyToOne(() => Bank, (account: Bank) => account.id)
    bankId: Bank;
}