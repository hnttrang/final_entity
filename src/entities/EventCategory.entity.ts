import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'

@Entity('EventCategory')
export class EventCategory{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
}