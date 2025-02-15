import { Injectable } from '@nestjs/common';
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

  async findTaskById() { }

  async createTask() { }

  async updateTaskById() { }

  async deleteTaskById() { }
}
