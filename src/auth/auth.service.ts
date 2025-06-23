import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpAuthDTO } from './dto/sign-up-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { SignInAuthDTO } from './dto/sign-in-auth.dto';
import * as bcrypt from 'bcrypt';
import { generateToken } from 'src/utils/token.utils';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signUp(signUpAuthDto: SignUpAuthDTO) {
    // 1) Create user
    // 2) Hash Password
    // 3) Save user to database
    // 2) Generate JWT Token

    const user = await this.userService.create(signUpAuthDto);

    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isActive: user.isActive,
    };

    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  async signIn(signInAuthDto: SignInAuthDTO) {
    // 1) Find user by email
    const user = await this.userService.findByEmail(signInAuthDto.email);

    if (!user) throw new BadRequestException('Email not found');
    // 2) Compare password

    const isMatch = await bcrypt.compare(signInAuthDto.password, user.password);

    if (!isMatch) throw new BadRequestException('Bad Credentials');
    // 3) issue JWT Token

    // const payload = {
    //   id: user.id,
    //   email: user.email,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   isActive: user.isActive,
    // };

    // const accessToken = await this.jwtService.signAsync(payload);
    return generateToken(user, this.jwtService);
  }
}
