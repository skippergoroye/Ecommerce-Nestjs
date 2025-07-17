import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
      @InjectRepository(Category)
      private categoryRepository: Repository<Category>,
    ) {}
  // create(createCategoryDto: CreateCategoryDto) {
  //   const category = new Category()


  //   Object.assign(category, CreateCategoryDto)


  //   return this.categoryRepository.save(category);
  // }


  async create(createCategoryDto: CreateCategoryDto) {
  const category = this.categoryRepository.create(createCategoryDto);
  return await this.categoryRepository.save(category);
}

  
}
