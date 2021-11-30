import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
@Entity()
export class Permission{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;
}