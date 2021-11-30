import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('Permission')
export class PermissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}