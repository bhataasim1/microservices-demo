import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAuthorDTO } from './dto/create-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(
    @Inject('AUTHOR_SERVICE')
    private readonly client: ClientProxy
  ) {}

  @Get()
  async healthCheck() {
    return this.client.send({ cmd: 'get' }, {});
  }

  @Get('all')
  async getAllAuthors() {
    return this.client.send({ cmd: 'getAuthors' }, {});
  }

  @Post('register')
  async registerAuthor(@Body() createAuthorDto: CreateAuthorDTO) {
    // console.log('Register', createAuthorDto);
    return this.client.send({ cmd: 'create' }, createAuthorDto);
  }
}
