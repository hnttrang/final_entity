import { ticketStatus } from 'src/interface/enum';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { EventEntity } from './Event.entity';
import { OrderEntity } from './Order.entity';
@Entity('Ticket')
export class TicketEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => EventEntity, (event: EventEntity) => event.id, {nullable: false})
    eventId: EventEntity;
    //OrderID
    @ManyToOne(() => OrderEntity, (order: OrderEntity) => order.id)
    orderId: OrderEntity;
    @Column({type: 'enum', enum: ticketStatus, default: ticketStatus.ready})
    status: ticketStatus
    @Column({ type: 'varchar', length: 510, nullable: false})
    nftToken: string;
    @Column({type: 'date'})
    createdAt: string;
    @Column({type: 'date'})
    updatedAt: string; 
}