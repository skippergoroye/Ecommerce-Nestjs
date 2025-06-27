
import { Role } from 'src/role/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;


  @Column({ unique: true })
  email: string;


  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;


  @ManyToOne(() => Role, (role) => role.users)
    role: Role
}
