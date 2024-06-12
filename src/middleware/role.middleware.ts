// src/common/middleware/role.middleware.ts
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RoleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('req----', JSON.stringify(req));
    
    // const user = req.user;
    // if (!user || user.role !== 'candidate') {
    //   throw new UnauthorizedException('Only candidates are allowed to create responses');
    // }
    // next();
  }
}
