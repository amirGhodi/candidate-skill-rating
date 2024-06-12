import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ExtractJwt } from 'passport-jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy {
  constructor(
    // private readonly configService: ConfigService,++
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validate(token: string): Promise<any> {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: 'secretKey',
      });
      const user = await this.userService.findOne(decoded.sub);
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}


