import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  Logger,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../models';
import { TasksService } from 'src/tasks/tasks.service';
import { BD_TABLE_USERS } from 'src/const';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly tasksService: TasksService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.create(createUserDto);
    if (user) {
      return User.toResponse(user);
    }
    this.logger.error('A user was not created');
    throw new HttpException(
      'Internal server error!!!',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get()
  findAll() {
    const users = this.usersService.findAll();
    if (Array.isArray(users)) {
      return users.map(User.toResponse);
    }
    this.logger.error('Internal server error');
    throw new HttpException(
      'Internal server error!!!',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(id);
    if (user) {
      return User.toResponse(user);
    }
    this.logger.error('User not found');
    throw new HttpException('User not found!!!', HttpStatus.NOT_FOUND);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.usersService.update(id, updateUserDto);
    if (user) {
      return User.toResponse(user);
    }
    this.logger.error('User not found');
    throw new HttpException('User not found!!!', HttpStatus.NOT_FOUND);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const isDelete = this.usersService.remove(id);
    if (isDelete) {
      this.tasksService.removeDependencies(id, BD_TABLE_USERS);
      this.logger.log('remove a user');
    } else {
      this.logger.log('user not found');
      throw new HttpException('User not found!!!', HttpStatus.NOT_FOUND);
    }
  }
}
