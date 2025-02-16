import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async findAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find({
      select: ['id', 'firstName', 'lastName', 'email']
    })
  }

  async findOneOrFail(conditions: FindOptionsWhere<UserEntity>, options?: FindOneOptions<UserEntity>) {
    try {
      return await this.userRepository.findOneOrFail({ where: conditions, ...options });
    } catch (error) {
      if (error.name === 'EntityNotFound') {
        throw new NotFoundException(`Usuário não encontrado nessas condições: ${JSON.stringify(conditions)}. Erro: ${error.message}`);
      }
      throw new NotFoundException(`An unexpected error occurred: ${error.message}`);
    }
  }
}
