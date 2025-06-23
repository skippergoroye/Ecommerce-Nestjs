import { User } from "src/user/entities/user.entity";
import { JwtService } from '@nestjs/jwt';

export const generateToken = async (user: User, jwtService: JwtService) => {
     const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isActive: user.isActive,
    };

    return jwtService.signAsync(payload);
}