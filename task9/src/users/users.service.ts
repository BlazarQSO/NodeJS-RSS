import { Inject, Injectable, Logger } from '@nestjs/common';
import { BD_TABLE_USERS } from 'src/const';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity, UserStorage } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  
  constructor(@Inject('UserStorage') private storage: UserStorage) {}  

  create(createUserDto: CreateUserDto): UserEntity {
    this.logger.log('add a new user');
    return this.storage.addItem(createUserDto, BD_TABLE_USERS) as UserEntity;
  }

  findAll(): UserEntity[] {
    this.logger.log('get all users');
    return this.storage.getAll(BD_TABLE_USERS) as UserEntity[];
  }

  findOne(id: string): UserEntity {
    this.logger.log('find a user by id');
    return this.storage.getItem(id, BD_TABLE_USERS) as UserEntity;
  }

  update(id: string, updateUserDto: UpdateUserDto): UserEntity {
    this.logger.log('update a user');
    return this.storage.updateItem(id, updateUserDto, BD_TABLE_USERS) as UserEntity;
  }

  remove(id: string): UserEntity {
    this.logger.warn('remove a user');
    return this.storage.removeItem(id, BD_TABLE_USERS) as UserEntity;
  }
}
