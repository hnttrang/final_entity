import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { User } from './User.entity';
import { EventCategory } from './EventCategory.entity';
@Entity()
export class Event{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    logoUrl: string;
    
    @Column()
    bannerUrl: string;

    @Column()
    description: string;

    @Column()
    eventAddress: string;

    @Column()
    saleStartDay: Date;

    @Column()
    saleEndDate: Date;

    @Column()
    eventStartDay: Date;

    @Column()
    eventEndDay: Date;

    @Column()
    totalTickets: number;
    
    @Column()
    availableTickets: number;

    @Column()
    ticketImageurl: string;

    @Column()
    ticketPrice: number;

    @Column()
    maxTicketOrder: number;

    @Column()
    minTicketOrder: number;

    @Column()
    organizationInfo: string;

    @Column()
    organizationEmail: string;

    @Column()
    organizationPhone: string;

    @Column()
    organizationAddress: string;

    @Column()
    isDeleted: boolean;

    @Column()
    status: string;

    @Column()
    createdAt: Date;
    
    @Column()
    updatedAt: Date;

    @ManyToOne(() => EventCategory, (category: EventCategory) => category.id)
    categoryID: EventCategory;

    @ManyToOne(() => User, (publisher) => publisher.id)
    userId: User;
}

