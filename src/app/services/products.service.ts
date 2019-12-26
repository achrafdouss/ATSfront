import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(page): Observable<any[]> {
    const url = encodeURI('http://localhost:3000/products?page=' + page);
    return this.http.get<any[]>(url);
  }

  getProduct(id): Observable<Product> {
    const url = encodeURI('http://localhost:3000/products/' + id);
    return this.http.get<Product>(url);
  }
}
