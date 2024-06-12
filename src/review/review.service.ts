// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Review, ReviewDocument } from './review.schema';

// @Injectable()
export class ReviewService {
//   constructor(@InjectModel(Review.name) private reviewModel: Model<ReviewDocument>) {}

//   async findAll(): Promise<Review[]> {
//     return this.reviewModel.find().exec();
//   }

//   async findOne(id: string): Promise<Review> {
//     return this.reviewModel.findById(id).exec();
//   }

//   async create(review: Review): Promise<Review> {
//     const createdReview = new this.reviewModel(review);
//     return createdReview.save();
//   }

//   async update(id: string, review: Review): Promise<Review> {
//     return this.reviewModel.findByIdAndUpdate(id, review, { new: true }).exec();
//   }

//   async remove(id: string): Promise<any> {
//     return this.reviewModel.findByIdAndDelete(id).exec();
//   }
}


