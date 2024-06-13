// src/response/response.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query, UseInterceptors } from '@nestjs/common';
import { ResponseService } from './response.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { ReviewerRoleMiddleware } from 'src/middleware/reviewer.middleware';

@Controller('responses')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createResponseDto: any) {
    return this.responseService.createResponse(createResponseDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.responseService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responseService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateRating(@Body() updateRatingDto: any) {
    return this.responseService.updateRating(updateRatingDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responseService.deleteResponse(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('aggregate')
  async getAggregatedRatings(@Body('candidateID') candidateID: string) {
    return this.responseService.getAggregatedSkillRatings(candidateID);
  }
}
