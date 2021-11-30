import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('Permission')
export class PermissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;
}