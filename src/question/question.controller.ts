import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.schema';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Question> {
    return this.questionService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() question: Question): Promise<Question> {
    return this.questionService.create(question);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() question: Question): Promise<Question> {
    return this.questionService.update(id, question);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.questionService.remove(id);
  }
}
