import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/cores/guards/auth.gaurds';
import { CurrentUser } from 'src/cores/decorators/current-user.decorator';
import { UserPayload } from './interfaces/user-payload.interface';

@Controller('api/v1/users')
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



}
