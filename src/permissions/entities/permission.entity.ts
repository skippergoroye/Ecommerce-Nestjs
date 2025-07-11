import { Endpoint } from 'src/endpoint/entities/endpoint.entity';
import { Role } from 'src/role/entities/role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Permission {
  @PrimaryColumn()
  roleName: string;

  @PrimaryColumn()
  endpointId: string;

  @ManyToOne(() => Role, (role) => role.permissions, { eager: false })
  @JoinColumn({ name: 'roleName', referencedColumnName: 'name' })
  role: Role;

  @ManyToOne(() => Endpoint, (endpoint) => endpoint.permissions, { eager: false })
  @JoinColumn({ name: 'endpointId', referencedColumnName: 'id' })
  endpoint: Endpoint;

  @Column({ default: false })
  isAllow: boolean;
}
