import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';
import { Types } from 'mongoose';

export type QuestionDocument = Question & Document;

export enum DifficultyLevel {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Schema()
export class Question {
  @Prop({ required: true })
  skillId: number;

  @Prop({ required: true, enum: DifficultyLevel })
  difficultyLevel: DifficultyLevel;

  @Prop({ required: true })
  question: string;

  @Prop()
  response: string;

  @Prop()
  rating: number;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
