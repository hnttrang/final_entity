import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { PermissionEntity } from './Permission.entity'
import { RoleEntity } from './Role.entity'
@Entity('RolePermission')
export class RolePermissionEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> RoleEntity, (role: RoleEntity) => role.id)
    roleId: string;

    @ManyToOne(()=> PermissionEntity, (permission: PermissionEntity) => permission.id)
    permissionId: PermissionEntity
}