import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async getAllTasks(@Query() paginationDTO: PaginationDTO): Promise<TaskEntity[]> {
    return await this.tasksService.findAllTasks(paginationDTO);
  }

  @Get(':id')
  async getTaskById(@Param('id', new ParseUUIDPipe) id: string): Promise<TaskEntity> {
    return await this.tasksService.findTaskById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createTask(@Body() body: CreateTaskDto): Promise<TaskEntity> {
    return await this.tasksService.createTask(body);
  }

  @Put(':id')
  async updateTask(
    @Param('id', new ParseUUIDPipe) id: string,
    @Body() body: UpdateTaskDto,
  ): Promise<TaskEntity> {
    return await this.tasksService.updateTaskById(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTask(@Param('id') id: string) {
    await this.tasksService.deleteTaskById(id);
  }


}
