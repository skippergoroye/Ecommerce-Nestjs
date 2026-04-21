import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { RoleService } from 'src/role/role.service';
import { ChangePwdUserDto } from './dto/change-pwd-user.dto';
import { CurrentUser } from '../cores/decorators/current-user.decorator';
import { UserPayload } from './interfaces/user-payload.interface';
import { SALT_ROUND } from 'src/cores/constants/app.constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private roleService: RoleService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const role = await this.roleService.getRole('user');
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

  async findAll() {
    const users = await this.usersRepository.find({
      relations: { role: true },
    });

    // console.log("users", users)
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: { role: true },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    console.log('updateUserDto', updateUserDto);

    user.firstName = updateUserDto.firstName
      ? updateUserDto.firstName
      : updateUserDto.firstName;
    user.lastName = updateUserDto.lastName
      ? updateUserDto.lastName
      : updateUserDto.lastName;

    return this.usersRepository.save(user);
  }

  async updateMe(currentUser: UserPayload, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(currentUser.id);

    console.log('updateUserDto', updateUserDto);

    user.firstName = updateUserDto.firstName
      ? updateUserDto.firstName
      : updateUserDto.firstName;
    user.lastName = updateUserDto.lastName
      ? updateUserDto.lastName
      : updateUserDto.lastName;

    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await this.usersRepository.softRemove(user);
  }

  async changeMyPassword(
    changePwdUserDto: ChangePwdUserDto,
    currentUser: UserPayload,
  ) {
    const user = await this.findOne(currentUser.id);
    const { currentPassword, newPassword, confirmPassword } = changePwdUserDto;

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) throw new BadRequestException(`Wrong Password`);

    if (newPassword !== confirmPassword)
      throw new BadRequestException(`Passwords are not same`);

    const hashedNewPassword = await bcrypt.hash(newPassword, SALT_ROUND);
    user.password = hashedNewPassword

    await this.usersRepository.save(user)
  }
}
