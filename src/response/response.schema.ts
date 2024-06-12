// src/response/schemas/response.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ResponseDocument = Response & Document;

@Schema()
export class CandidateResponse {
  @Prop({ required: true })
  skillId: number;

  @Prop({ required: true })
  difficulty_level: string;

  @Prop({ required: true })
  question: string;

  @Prop()
  response: string;

  @Prop()
  rating?: number;
}

const CandidateResponseSchema = SchemaFactory.createForClass(CandidateResponse);

@Schema()
export class Response {
  @Prop({ type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  candidateID: string;

  @Prop({ type: [CandidateResponseSchema], default: [] })
  candidateResponse: CandidateResponse[];
}

export const ResponseSchema = SchemaFactory.createForClass(Response);
