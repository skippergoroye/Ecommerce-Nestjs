import { Controller, Post, Body, UseGuards, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { TransformDTO } from 'src/cores/interceptors/transform-dto.interceptor';
import { ResponseCategoryDto } from './dto/response-category.dto';
import { AuthGuard } from 'src/cores/guards/auth.gaurds';
import { API_VERSION } from 'src/cores/constants/app.constants';

@Controller(`${API_VERSION}/categories`)
@TransformDTO(ResponseCategoryDto)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll() {
    const categories = await this.categoryService.findAll();

    return categories;
    // return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOne(+id);
  }
}
