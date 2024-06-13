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

  async getAggregatedSkillRatings(candidateID: string): Promise<any> {
    const candidateResponses = await this.responseModel.find({ candidateID });
    if (!candidateResponses) {
      throw new NotFoundException('Candidate responses not found');
    }

    const skillRatings = {};

    candidateResponses.forEach(response => {
      response.candidateResponse.forEach(item => {
        const { skillId, difficulty_level, rating } = item;
        if (!skillRatings[skillId]) {
          skillRatings[skillId] = { easy: [], medium: [], hard: [] };
        }
        skillRatings[skillId][difficulty_level].push(rating);
      });
    });

    const aggregatedRatings = Object.keys(skillRatings).map(skillId => {
      const easyRatings = skillRatings[skillId].easy;
      const mediumRatings = skillRatings[skillId].medium;
      const hardRatings = skillRatings[skillId].hard;

      const easyCount = easyRatings.length;
      const mediumCount = mediumRatings.length;
      const hardCount = hardRatings.length;

      const totalRating = 
        easyRatings.reduce((sum, r) => sum + r, 0) * 1 +
        mediumRatings.reduce((sum, r) => sum + r, 0) * 2 +
        hardRatings.reduce((sum, r) => sum + r, 0) * 3;

      const totalCount = 
        easyCount * 1 + 
        mediumCount * 2 + 
        hardCount * 3;

      const aggregatedRating = totalCount ? totalRating / totalCount : 0;

      return {
        skillId,
        rating: parseFloat(aggregatedRating.toFixed(1))
      };
    });

    return aggregatedRatings;
  }
}
