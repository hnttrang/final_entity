import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
@Entity('Permission')
export class Permission{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;
}