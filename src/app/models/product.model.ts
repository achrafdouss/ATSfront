import {Review} from './review.model';

export class Product {
  _id: string;
  productName: string;
  category: string;
  price: string;
  imageUrl: string;
  reviews: Review[];
}
