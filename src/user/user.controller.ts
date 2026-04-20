import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/cores/guards/auth.gaurds';
import { CurrentUser } from 'src/cores/decorators/current-user.decorator';
import { UserPayload } from './interfaces/user-payload.interface';
import { TransformDTO } from 'src/cores/interceptors/transform-dto.interceptor';
import { ResponseUserDto } from './dto/response-user.dto';

@Controller('api/v1/users')
@TransformDTO(ResponseUserDto)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  getCurrentUser(@CurrentUser() user: UserPayload) {
    // // @ts-ignore
    // return req.currentUser;
    return user;
  }

  @Get()
  // @UseGuards(AuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, UpdateUserDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    // return this.userService.remove(+id)
  }
}
