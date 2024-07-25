import { ConflictException, Injectable } from '@nestjs/common';
import { IAuthor } from './interface';
import { RpcException } from '@nestjs/microservices';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoee@test.com',
    password: 'password',
  },
];

@Injectable()
export class UsersService {
  async getAllUsers() {
    const user = users.map(({ password, ...rest }) => rest);
    return { data: user };
  }

  async createUser(data: IAuthor) {
    // console.log('data', data);
    const existingUser = users.find((user) => user.email === data.email);

    ///TODO: Having issue here
    if (existingUser) {
      throw new RpcException('User already exists');
    }

    const user = {
      id: users.length + 1,
      ...data,
    };

    users.push(user);

    const { password, ...rest } = user;

    return { message: 'User Registered Successfully', user: rest };
  }
}
