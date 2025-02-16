import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/app/users/users.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PassportModule,
    JwtModule.register(
      {
        privateKey: process.env.JWT_PRIVATE_KEY,
        signOptions: { expiresIn: '1h' }
      }
    )
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
