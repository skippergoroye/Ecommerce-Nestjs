import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserPayload } from 'src/user/interfaces/user-payload.interface';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as Request;

    // Extract the token from the Authorization header
    // console.log(request.headers);

    const token = request.headers?.authorization?.split(' ')[1];
    if (!token) throw new UnauthorizedException('Please provide a token');
    // console.log(token);
    // verify  Jwt Payload

    try {
      const currentUser = (await this.jwtService.verifyAsync(token, {
        // secret: process.env.JWT_SECRET_KEY,
        secret: this.configService.get<string>('JWT_SECRET_KEY'),
      })) as UserPayload;

      // console.log('Check Current User', currentUser);

      request.currentUser = {
        id: currentUser.id,
        email: currentUser.email,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        isActive: currentUser.isActive,
      };
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
