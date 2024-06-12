// src/response/response.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { Response, ResponseSchema } from './response.schema';
import { RoleMiddleware } from '../middleware/role.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Response.name, schema: ResponseSchema }]),
  ],
  providers: [ResponseService],
  controllers: [ResponseController],
})
export class ResponseModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(RoleMiddleware)
  //     .forRoutes({ path: 'responses', method: RequestMethod.POST });
  // }
}
