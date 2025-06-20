
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;


  @Column()
  email: string;


  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
