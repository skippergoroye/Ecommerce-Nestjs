import slugify from 'slugify';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  slug: string;


  // @Column({default: true})
  // isActive: boolean;


  @DeleteDateColumn()
  dateDeleted: Date;


  @BeforeInsert()
  @BeforeUpdate()
  generateSlug() {
    if (typeof this.name === 'string') {
      const date = new Date();
      this.slug = `${slugify(this.name)} - ${date.getTime()}`;
      // this.slug = slugify(this.name, { lower: true });
    } else {
      throw new Error('Category name is required for slug generation');
    }
  }
}
