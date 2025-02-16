import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id', new ParseUUIDPipe) id: string): Promise<UserEntity> {
    return await this.usersService.findOneOrFail({ id });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() body: CreateUserDto): Promise<UserEntity> {
    return await this.usersService.createUser(body);
  }

  @Put(':id')
  async updateUser(
    @Param('id', new ParseUUIDPipe) id: string,
    @Body() body: UpdateUserDto,
  ): Promise<UserEntity> {
    return await this.usersService.updateUser(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param('id') id: string) {
    await this.usersService.deleteUser(id);
  }

}
