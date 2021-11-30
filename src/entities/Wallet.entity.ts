import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from 'typeorm'
import { UserEntity } from './User.entity';

@Entity('Wallet')
export class WalletEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    walletAddress: string;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    userId: UserEntity;
}