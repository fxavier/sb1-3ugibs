import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-wrap gap-6">
        <div class="w-full md:w-1/4">
          <!-- Filters -->
          <div class="card">
            <h2 class="text-xl font-bold mb-4">Filters</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2">Price Range</label>
                <div class="flex gap-2">
                  <input type="number" placeholder="Min" class="input-field">
                  <input type="number" placeholder="Max" class="input-field">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Categories</label>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2">
                    Electronics
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2">
                    Clothing
                  </label>
                  <!-- Add more categories -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-3/4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <app-product-card *ngFor="let product of products" 
                            [product]="product">
            </app-product-card>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}