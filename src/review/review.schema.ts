import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';
import { Question } from '../question/question.schema';
import { Types } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  reviewer: User;

  @Prop({ type: Types.ObjectId, ref: 'Question', required: true })
  question: Question;

  @Prop({ required: true })
  rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
