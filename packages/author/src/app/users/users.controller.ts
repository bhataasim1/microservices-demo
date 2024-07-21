import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { IAuthor } from './interface/create-author.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @MessagePattern({ cmd: 'getAuthors' })
  async getUsers() {
    return this.userService.getAllUsers();
  }

  @MessagePattern({ cmd: 'create' })
  async createUser(data: IAuthor) {
    // console.log('data User', data);
    return this.userService.createUser(data);
  }
}
