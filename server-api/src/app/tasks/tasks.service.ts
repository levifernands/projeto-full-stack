import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entity/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) { }

  async findAllTasks(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  async findTaskById(id: string): Promise<TaskEntity> {
    try {
      return await this.taskRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      console.error('Erro ao procurar tarefa por ID:', error);
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada.`);
    }
  }

  async createTask(taskData): Promise<TaskEntity[]> {
    try {
      const newTask = this.taskRepository.create(taskData);
      return await this.taskRepository.save(newTask);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar a tarefa.', error);
    }
  }

  async updateTaskById() { }

  async deleteTaskById() { }
}
