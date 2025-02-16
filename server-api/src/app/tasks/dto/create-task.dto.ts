import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { TaskStatus } from '../entity/task.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Finalizar código da API',
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Descrição detalhada da tarefa',
    example: 'Essa é uma descrição da tarefa',
  })
  description: string;

  @IsEnum(TaskStatus, { message: 'Status inválido' })
  @ApiProperty({
    description: 'Status da tarefa',
    enum: TaskStatus,
    example: TaskStatus.PENDING,
  })
  status: TaskStatus;
}