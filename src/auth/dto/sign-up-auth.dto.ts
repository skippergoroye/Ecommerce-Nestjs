import { ApiProperty } from '@nestjs/swagger';

export class SignUpAuthDTO {
  id: number;
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  role: string;
}
