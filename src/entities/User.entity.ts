import { Gender } from 'src/interface/enum';
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm'
import { RoleEntity } from './Role.entity';
@Entity('User')
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar', length: 320, unique: true})
    email: string;

    @Column({type: 'varchar', length: 255})
    username: string;

    @Column({type: 'varchar', length: 255})
    password: string;

    @Column({type: 'date'})
    birthday: string;

    @Column({type: 'varchar', length: 11})
    numberPhone: string;

    @Column({type: 'enum', enum: Gender})
    gender: Gender;

    @Column({type: 'varchar', length: 255})
    avatar: string;

    @Column({type: 'bit'})
    isSocial: boolean;

    @Column({type: 'bit', default: 0})
    isDeleted: boolean;
    
    @Column({type: 'date'})
    createAt: string;

    @Column({type: 'date'})
    updateAt: string;

    @OneToOne(() => RoleEntity)
    @JoinColumn()
    roleId: RoleEntity;
}

