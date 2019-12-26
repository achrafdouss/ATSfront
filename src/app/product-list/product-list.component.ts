import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductsService} from '../services/products.service';
import {Review} from '../models/review.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  private nbPage;

  constructor(private  productService: ProductsService) {
  }

  ngOnInit() {
    this.productService.getProducts(1).subscribe(result => {
      this.productList = result.docs;
      this.nbPage = Array(result.pages).fill().map((x, i) => i + 1);
    });
  }

  calcRating(reviews: Review[]) {
    let sum = 0;
    for (const rev of reviews) {
      sum += rev.rating;
    }
    return sum / reviews.length;
  }

  changePage(nb) {
    this.productService.getProducts(nb).subscribe(result => {
      this.productList = result.docs;
      this.nbPage = Array(result.pages).fill().map((x, i) => i + 1);
    });
  }
}
