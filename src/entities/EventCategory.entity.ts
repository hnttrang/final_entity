import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'

@Entity('EventCategory')
export class EventCategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type: 'varchar', length: 255})
    name: string;
}