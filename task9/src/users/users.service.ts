import { Injectable } from '@nestjs/common';
import { BD_TABLE_USERS } from 'src/const';
import { Database } from 'src/store/storage';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private storage: Database) {}  

  create(createUserDto: CreateUserDto): UserEntity {
    return this.storage.addItem(createUserDto, BD_TABLE_USERS) as UserEntity;
  }

  findAll(): UserEntity[] {
    return this.storage.getAll(BD_TABLE_USERS) as UserEntity[];
  }

  findOne(id: string): UserEntity {
    return this.storage.getItem(id, BD_TABLE_USERS) as UserEntity;
  }

  update(id: string, updateUserDto: UpdateUserDto): UserEntity {
    return this.storage.updateItem(id, updateUserDto, BD_TABLE_USERS) as UserEntity;
  }

  remove(id: string): UserEntity {
    return this.storage.removeItem(id, BD_TABLE_USERS) as UserEntity;
  }
}
