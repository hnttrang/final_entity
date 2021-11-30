import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'

@Entity()
export class EventCategory{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
}