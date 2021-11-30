import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { Event } from './Event.entity';
import { Order } from './Order.entity';
@Entity('Ticket')
export class Ticket{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Event, (event: Event) => event.id, {nullable: false})
    eventId: Event;
    //OrderID
    @ManyToOne(() => Order, (order: Order) => order.id)
    orderId: string;
    @Column({default: 'ready'})
    status: 'ready' | 'sold'
    @Column({nullable: false})
    nftToken: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date; 
}