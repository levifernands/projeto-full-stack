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

  async updateTaskById(id: string, taskData): Promise<TaskEntity> {
    try {
      const task = await this.taskRepository.findOneOrFail({ where: { id } });

      if (!task) {
        throw new NotFoundException(`Tarefa com ID ${id} não encontrada.`);

      }

      this.taskRepository.merge(task, taskData);
      return await this.taskRepository.save(task);

    } catch (error) {
      throw new InternalServerErrorException('Erro ao atualizar a tarefa.', error);
    }
  }


  async deleteTaskById(id: string) {
    try {
      await this.taskRepository.findOneOrFail({ where: { id } });

      await this.taskRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao deletar a tarefa.', error);
    }
  }
}
