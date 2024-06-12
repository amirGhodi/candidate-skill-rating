import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from './review.schema';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  // @Get()
  // findAll(): Promise<Review[]> {
  //   return this.reviewService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<Review> {
  //   return this.reviewService.findOne(id);
  // }

  // @Post()
  // create(@Body() review: Review): Promise<Review> {
  //   return this.reviewService.create(review);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() review: Review): Promise<Review> {
  //   return this.reviewService.update(id, review);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.reviewService.remove(id);
  // }
}
