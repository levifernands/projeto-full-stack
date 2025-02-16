import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entity/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDTO } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from './utils/constants.utils';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) { }

  async findAllTasks(userId: any, paginationDTO: PaginationDTO,): Promise<TaskEntity[]> {
    return await this.taskRepository.find({
      where: { userId },
      skip: paginationDTO.skip,
      take: paginationDTO.limit ?? DEFAULT_PAGE_SIZE
    },
    );
  }

  async findTaskById(id: string, userId: string): Promise<TaskEntity> {
    try {
      return await this.taskRepository.findOneOrFail({ where: { id, userId } });
    } catch (error) {
      console.error('Erro ao procurar tarefa por ID:', error);
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada.`);
    }
  }

  async createTask(userId: string, taskData: CreateTaskDto): Promise<TaskEntity> {
    try {
      const newTask = this.taskRepository.create({ ...taskData, userId });
      return await this.taskRepository.save(newTask);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar a tarefa.', error);
    }
  }

  async updateTaskById(userId: string, id: string, taskData: UpdateTaskDto): Promise<TaskEntity> {
    try {
      const task = await this.taskRepository.findOneOrFail({ where: { id, userId } });

      if (!task) {
        throw new NotFoundException(`Tarefa com ID ${id} não encontrada.`);

      }

      this.taskRepository.merge(task, taskData);
      return await this.taskRepository.save(task);

    } catch (error) {
      throw new InternalServerErrorException('Erro ao atualizar a tarefa.', error);
    }
  }


  async deleteTaskById(userId: string, id: string) {
    try {
      await this.taskRepository.findOneOrFail({ where: { id, userId } });

      await this.taskRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao deletar a tarefa.', error);
    }
  }
}
