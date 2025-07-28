import slugify from 'slugify';
import { Category } from 'src/category/entities/category.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  offerPrice: number;

  @Column()
  shortDescription: string;

  @Column({ nullable: true })
  longDescription: string;

  @Column()
  quantity: number;


  slug: string;
  @ManyToMany(() => Category, (category) => category.products)
  category: Category[];

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
