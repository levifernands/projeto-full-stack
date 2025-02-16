import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entity/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async getAllTasks(): Promise<TaskEntity[]> {
    return await this.tasksService.findAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id', new ParseUUIDPipe) id: string): Promise<TaskEntity> {
    return await this.tasksService.findTaskById(id);
  }


}
