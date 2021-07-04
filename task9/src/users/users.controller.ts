import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../models';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.create(createUserDto);
    return User.toResponse(user);   
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {    
    const users = this.usersService.findAll();
    return users.map(User.toResponse);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(id);
    if (user) {
        return User.toResponse(user);
    } else {
        return null;
    }    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.usersService.update(id, updateUserDto);
    if (user) {
        return User.toResponse(user);
    } else {
        return null;
    }    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);    
  }
}
