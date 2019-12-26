import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: Product;

  constructor(private  productService: ProductsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params.id).subscribe(result => {
      this.product = result;
    });
  }

}
