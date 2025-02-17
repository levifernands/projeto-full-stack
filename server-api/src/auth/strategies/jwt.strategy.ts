import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, JwtFromRequestFunction } from 'passport-jwt';

import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService) {
    const secretKey = process.env.JWT_PRIVATE_KEY;
    if (!secretKey) {
      throw new Error('JWT_PRIVATE_KEY is not defined');
    }
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey,
      ignoreExpiration: false,
      passReqToCallback: false,
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}