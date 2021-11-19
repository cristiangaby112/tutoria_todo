import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  async getAll() {
    return 'get all';
  }

  @Get('/:id')
  async getOne(id: string) {
    return 'getOne';
  }

  @Post()
  async create() {
    return 'create';
  }

  @Put(':id')
  async update(id: string) {
    return 'update';
  }

  @Delete(':id')
  async delete(id: string) {
    return 'delete';
  }
}
