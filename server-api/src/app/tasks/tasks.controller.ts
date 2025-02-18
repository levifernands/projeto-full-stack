import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationDTO } from './dto/pagination.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async getAllTasks(@Query() paginationDTO: PaginationDTO, @Req() req): Promise<TaskEntity[]> {
    return await this.tasksService.findAllTasks(req.user.id, paginationDTO);

  }

  @Get(':id')
  async getTaskById(@Req() req, @Param('id', new ParseUUIDPipe) id: string): Promise<TaskEntity> {
    return await this.tasksService.findTaskById(id, req.user.id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createTask(@Req() req, @Body() body: CreateTaskDto): Promise<TaskEntity> {
    return await this.tasksService.createTask(req.user.id, body);
  }

  @Put(':id')
  async updateTask(
    @Req() req,
    @Param('id', new ParseUUIDPipe) id: string,
    @Body() body: UpdateTaskDto,
  ): Promise<TaskEntity> {
    return await this.tasksService.updateTaskById(req.user.id, id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTask(@Req() req, @Param('id') id: string) {
    await this.tasksService.deleteTaskById(req.user.id, id);
  }


}
