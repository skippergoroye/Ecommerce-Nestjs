import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private roleService: RoleService
  ) {}
  async create(createUserDto: CreateUserDto) {
    const role = await this.roleService.getRole('user')
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const user = new User();
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    Object.assign(user, { ...createUserDto, password: hashedPassword, role });

    return this.usersRepository.save(user);
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
    });

    return user;
  }


  findAll() {
    return `This action returns all users`;
  }
}
