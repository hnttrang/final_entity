import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { User } from './User.entity'
@Entity('Bank')
export class Bank{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    @Column()
    cardHolderName: string;
    @Column()
    creditNumber: string;

    @ManyToOne(() => User, (user: User) => user.id)
    userId: User[]
}