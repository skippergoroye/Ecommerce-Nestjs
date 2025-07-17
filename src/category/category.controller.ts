import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { TransformDTO } from 'src/cores/interceptors/transform-dto.interceptor';
import { ResponseCategoryDto } from './dto/response-category.dto';
import { AuthGuard } from 'src/cores/guards/auth.gaurds';
import { API_VERSION } from 'src/cores/constants/app.constants';

@Controller(`${API_VERSION}/categories`)
// @TransformDTO(ResponseCategoryDto)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createCategoryDto: CreateCategoryDto) {

    const category = await  this.categoryService.create(createCategoryDto);

    return {message: "Create Category Successfully", data: category}
    // return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll() {
    const categories = await this.categoryService.findAll();

    return { message: 'Get all Category Successfully', data: categories };
    // return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }
}
