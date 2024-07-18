import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'field for set user name', default: 'Alex' })
  name: string;
  @ApiProperty({ description: 'field for set user email', default: 'alex@example.com' })
  email: string;
  @ApiProperty()
  password: string;
}
