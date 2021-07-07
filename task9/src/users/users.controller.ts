import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../models';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.create(createUserDto);
    if (user) {
      return User.toResponse(user);   
    }
    this.logger.error('A user was not created');
    throw new HttpException('Internal server error!!!', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {    
    const users = this.usersService.findAll();    
    if (Array.isArray(users)) {
      return users.map(User.toResponse);
    }
    this.logger.error('Internal server error');
    throw new HttpException('Internal server error!!!', HttpStatus.INTERNAL_SERVER_ERROR);
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

  @Patch(':id')
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
    return this.usersService.remove(id);    
  }
}
