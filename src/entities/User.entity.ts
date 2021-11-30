import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm'
import { Role } from './Role.entity';
@Entity('User')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    birthday: Date;

    @Column()
    numberPhone: string;

    @Column()
    gender: number;

    @Column()
    avatar: string;

    @Column()
    isSocial: boolean;

    @Column()
    isDeleted: boolean;
    
    @Column()
    createAt: Date;

    @Column()
    updateAt: Date;

    @OneToOne(() => Role, (role: Role) => role.id)
    roleId: string;
}

