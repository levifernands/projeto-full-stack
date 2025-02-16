import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
      throw new NotFoundException(`Erro ao buscar usuário: ${error.message}`);
    }
  }

  async updateUser(id: string, userData): Promise<UserEntity> {
    try {
      const user = await this.findOneOrFail({ id });

      if (!user) {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
      }

      this.userRepository.merge(user, userData);
      return await this.userRepository.save(user);

    } catch (error) {
      throw new InternalServerErrorException('Erro ao atualizar o usuário.', error);
    }
  }
}
