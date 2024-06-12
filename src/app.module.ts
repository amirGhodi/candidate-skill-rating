import { Module,NestModule , MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { ReviewModule } from './review/review.module';
import { ReviewerRoleMiddleware } from './middleware/reviewer.middleware';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Update to your MongoDB connection string
    JwtModule.register({
      secret: 'secretKey', // Use environment variable in production
      signOptions: { expiresIn: '60m' },
    }),
    AuthModule,
    UserModule,
    QuestionModule,
    ReviewModule,
    ResponseModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ReviewerRoleMiddleware)
      .forRoutes('responses'); // Apply to all routes under 'responses'
  }
}
