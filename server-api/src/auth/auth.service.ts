import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserEntity } from 'src/app/users/entity/user.entity';
import { UsersService } from 'src/app/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/app/users/dto/create-user.dto';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private jwtService: JwtService) { }

  async register(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userService.createUser(createUserDto);

    return user;
  }


  async login(user) {
    const payload = { sub: user.id, email: user.email }
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    let user: UserEntity;

    try {
      user = await this.userService.findOneOrFail({ email });
    } catch (error) {
      throw new UnauthorizedException(`Não existe nenhuum usuário de email: ${email}`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(
        `Senha inválida para o usuário de email: ${email}`,
      );
    }
    return user;

  }
}
