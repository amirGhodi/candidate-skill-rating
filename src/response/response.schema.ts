import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CandidateResponse {
  @Prop({ required: true })
  skillId: number;

  @Prop({ required: true })
  difficulty_level: string;

  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  response: string;

  @Prop({ required: false })
  rating?: number;
}

@Schema()
export class Response {
  @Prop({ required: true })
  candidateID: string;

  @Prop({ type: [CandidateResponse], required: true })
  candidateResponse: CandidateResponse[];
}

export type ResponseDocument = Response & Document;
export const ResponseSchema = SchemaFactory.createForClass(Response);
