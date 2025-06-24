import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>  {
    const request = context.switchToHttp().getRequest();

    // Extract the token from the Authorization header

    // console.log(request.headers);

    const token = request.headers?.authorization.split(' ')[1];
    // console.log(token);
    // verify  Jwt Payload
    const currentUser = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET_KEY,
    });


    console.log("Check Current User", currentUser);

    request.user = currentUser;
    return true;
  }
}
