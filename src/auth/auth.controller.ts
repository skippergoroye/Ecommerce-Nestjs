import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

import { SignInAuthDTO } from './dto/sign-in-auth.dto';
import { SignUpAuthDTO } from './dto/sign-up-auth.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  async signUp(@Body() createAuthDto: SignUpAuthDTO) {
    const accessToken =  await this.authService.signUp(createAuthDto);

    return {
      message: 'Sign up successfully',
      data: accessToken,
    };
  }

  @Post('/sign-in')
  async signIn(@Body() signInAuthDTO: SignInAuthDTO) {
     const accessToken =  await this.authService.signIn(signInAuthDTO);

    return {
      message: 'Sign In successfully',
      data: accessToken,
    };
  }

 
}
