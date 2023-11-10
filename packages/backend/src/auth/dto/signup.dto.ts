import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, Matches, IsEmail } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message:
      'Password must contain at least 1 letter, 1 number, and 1 special character',
  })
  password: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  userName: string;
}
