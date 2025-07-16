import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { TransformDTO } from 'src/cores/interceptors/transform-dto.interceptor';
import { ResponseCategoryDto } from './dto/response-category.dto';
import { AuthGuard } from 'src/cores/guards/auth.gaurds';
import { API_VERSION } from 'src/constants/app.constants';


@Controller(`${API_VERSION}/categories`)
@TransformDTO(ResponseCategoryDto)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }


}
