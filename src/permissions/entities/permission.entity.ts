import { Endpoint } from 'src/endpoint/entities/endpoint.entity';
import { Role } from 'src/role/entities/role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Permission {
  // @PrimaryGeneratedColumn()
  // id: number;

  // @ManyToMany(() => Role, (role) => role.permissions)
  // role: Role;

  // @ManyToMany(() => Role, (role) => role.permissions)
  // endpoint: Endpoint;
  // isAllow: boolean;

  @PrimaryColumn()
  roleName: string;

  @PrimaryColumn()
  endpointId: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  @JoinColumn({ name: 'rolename' })
  role: Role;

  @ManyToMany(() => Endpoint, (endpoint) => endpoint.permissions)
  @JoinColumn({ name: 'endpointId' })
  endpoint: Endpoint;
    
  @Column({ default: false})
  isAllow: boolean;
}
