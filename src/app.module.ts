import { Module,NestModule , MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ReviewerRoleMiddleware } from './middleware/reviewer.middleware';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    JwtModule.register({
      secret: 'secretKey', 
      signOptions: { expiresIn: '60m' },
    }),
    AuthModule,
    UserModule,
    ResponseModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ReviewerRoleMiddleware)
      .forRoutes('responses');
  }
}
