import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) { }

  async findAllUsers(): Promise<UserEntity[]> {
    return await this.usersRepository.find({
      select: ['id', 'firstName', 'lastName', 'email']
    })
  }
}
