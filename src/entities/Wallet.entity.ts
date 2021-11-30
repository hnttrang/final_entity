import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne} from 'typeorm'
import { User } from './User.entity';

@Entity('Wallet')
export class Wallet{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    walletAddress: string;

    @OneToOne(() => User, (user: User) => user.id)
    userId: User;
}