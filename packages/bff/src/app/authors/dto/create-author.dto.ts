import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { IAuthor } from '@microservices/author/app/users/interface';

export class CreateAuthorDTO implements IAuthor {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
