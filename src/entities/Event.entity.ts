import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { UserEntity } from './User.entity';
import { EventCategoryEntity } from './EventCategory.entity';
import { eventStatus } from 'src/interface/enum';
@Entity('Event')
export class EventEntity{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: 'varchar', length: 200})
    name: string;

    @Column({type: 'varchar', length: 255})
    logoUrl: string;
    
    @Column({type: 'varchar', length: 255})
    bannerUrl: string;

    @Column({type: 'varchar', length: 255})
    description: string;

    @Column({type: 'varchar', length: 255})
    eventPlacename: string;

    @Column({type: 'varchar', length: 255})
    eventAddress: string;

    @Column({type: 'date'})
    saleStartDay: Date;

    @Column({type: 'date'})
    saleEndDate: Date;

    @Column({type: 'date'})
    eventStartDay: string;

    @Column({type: 'date'})
    eventEndDay: string;

    @Column({type: 'int', default: 1, nullable: false})
    totalTickets: string;
    
    @Column({type: 'int', default: 1, nullable: false})
    availableTickets: number;

    @Column({type: 'varchar', length: 255})
    ticketImageurl: string;

    @Column({type: 'float'})
    ticketPrice: number;

    @Column({type: 'int'})
    maxTicketOrder: number;

    @Column({type: 'int'})
    minTicketOrder: number;

    @Column({type: 'varchar', length: 255})
    organizationInfo: string;

    @Column({type: 'varchar', length: 321})
    organizationEmail: string;

    @Column({type: 'varchar', length: 11})
    organizationPhone: string;

    @Column({type: 'varchar', length: 255})
    organizationAddress: string;

    @Column({type: 'bit', default: 0})
    isDeleted: boolean;

    @Column({type: 'enum', enum: eventStatus})
    status: eventStatus;

    @Column({type: 'date'})
    createdAt: string;
    
    @Column({type: 'date'})
    updatedAt: string;

    @ManyToOne(() => EventCategoryEntity, (category: EventCategoryEntity) => category.id)
    categoryID: EventCategoryEntity;

    @ManyToOne(() => UserEntity, (publisher: UserEntity) => publisher.id)
    userId: UserEntity;
}

