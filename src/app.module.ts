import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/User.entity';
import { PermissionEntity } from './entities/Permission.entity';
import { BankEntity } from './entities/Bank.entity';
import { EventEntity } from './entities/Event.entity';
import { EventCategoryEntity } from './entities/EventCategory.entity';
import { OrderEntity } from './entities/Order.entity';
import { RoleEntity } from './entities/Role.entity';
import { RolePermissionEntity } from './entities/RolePermission.entity';
import { TicketEntity } from './entities/Ticket.entity';
import { WalletEntity } from './entities/Wallet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PermissionEntity, UserEntity, BankEntity, EventEntity, EventCategoryEntity, OrderEntity, RoleEntity, RolePermissionEntity, TicketEntity, WalletEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '241100',
      database: 'finalProject',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
