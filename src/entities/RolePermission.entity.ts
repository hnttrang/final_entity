import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { Permission } from './Permission.entity'
import { Role } from './Role.entity'
@Entity()
export class RolePermission{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> Role, (role: Role) => role.id)
    roleId: string;

    @ManyToOne(()=> Permission, (permission: Permission) => permission.id)
    permissionId: string;
}