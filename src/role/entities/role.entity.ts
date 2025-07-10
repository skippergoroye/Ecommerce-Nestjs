import { Permission } from 'src/permissions/entities/permission.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryColumn()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => User, (user) => user.role)
  users: User[];


  @OneToMany(() => Permission, (perm) => perm.role)
  permissions: Permission[];

  // Role <-> Users
  //One role has many users u1, u2, u3
  // Many-to-one / one-to-many is a relation where A contains multiple instances of B, but B contains only one instance of A.
  // Let's take for example User and Photo entities.
  // User can have multiple photos, but each photo is owned by only one single user.
}
