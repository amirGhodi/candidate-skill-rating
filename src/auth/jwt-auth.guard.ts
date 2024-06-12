import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

let JWTServices;

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

  
  constructor(private readonly jwtService: JwtService) {
    super(jwtService);
    JWTServices = this.jwtService;
    console.log("jwer====", JWTServices)
  }
  

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = JWTServices.verify(token);
      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    };
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
