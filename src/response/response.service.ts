// src/response/response.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseDocument, Response as CandidateResponse } from './response.schema';

@Injectable()
export class ResponseService {
  constructor(@InjectModel(CandidateResponse.name) private responseModel: Model<ResponseDocument>) {}

  async createResponse(createResponseDto: any): Promise<CandidateResponse> {
    const createdResponse = new this.responseModel(createResponseDto);
    return createdResponse.save();
  }

  async findAll(): Promise<CandidateResponse[]> {
    return this.responseModel.find().exec();
  }

  async findOne(id: string): Promise<CandidateResponse> {
    const response = await this.responseModel.findById(id).exec();
    if (!response) {
      throw new NotFoundException('Response not found');
    }
    return response;
  }

  async updateRating(updateRatingDto: any): Promise<CandidateResponse> {
    const { question, rating, difficulty_level, candidateID } = updateRatingDto;
    const response = await this.responseModel.findOneAndUpdate(
      { candidateID, 'candidateResponse.question': question, 'candidateResponse.difficulty_level': difficulty_level },
      { $set: { 'candidateResponse.$.rating': rating } },
      { new: true }
    ).exec();
    
    if (!response) {
      throw new NotFoundException('Response not found');
    }
    return response;
  }

  async deleteResponse(id: string): Promise<CandidateResponse> {
    const deletedResponse = await this.responseModel.findByIdAndDelete(id).exec();
    if (!deletedResponse) {
      throw new NotFoundException('Response not found');
    }
    return deletedResponse;
  }
}
