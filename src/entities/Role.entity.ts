import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
@Entity('Role')
export class Role{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}