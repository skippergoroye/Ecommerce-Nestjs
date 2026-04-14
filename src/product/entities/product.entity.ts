import slugify from 'slugify';
import { Category } from 'src/category/entities/category.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'numeric', precision: 6, scale: 2  })
  price: number;

  @Column({ type: 'numeric', precision: 6, scale: 2, nullable: true })
  offerPrice: number;

  @Column({ type: 'varchar', length: 255 })
  shortDescription: string;

  @Column({ type: 'text', nullable: true })
  longDescription: string;

  @Column({ type: 'int', })
  quantity: number;

  @Column({ type: 'text'}) // ✅ Add this!
  slug: string;

  // @ManyToMany(() => Category, (category) => category.products)
  // @JoinTable() // ✅ Add this!
  // category: Category[];


  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  @JoinColumn({ name: 'categoryId' }) // Optional: customize column name
  category: Category;

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug() {
    if (typeof this.name === 'string') {
      const date = new Date();
      this.slug = `${slugify(this.name)}-${date.getTime()}`;
    } else {
      throw new Error('Category name is required for slug generation');
    }
  }
}
