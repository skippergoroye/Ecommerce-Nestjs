import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

@Entity()
export class Endpoint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  method: HttpMethod;
}
