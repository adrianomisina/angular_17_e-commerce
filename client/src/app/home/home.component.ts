import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Product, Products } from '../types';
import { ProductComponent } from '../components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        console.log(products.items);
      });
  }
}
