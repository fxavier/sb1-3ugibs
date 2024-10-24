import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card group">
      <div class="relative overflow-hidden">
        <img [src]="product.imageUrl" [alt]="product.name" 
             class="w-full h-48 object-cover transition-transform group-hover:scale-105">
        <div *ngIf="product.discountedPrice" 
             class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
          Sale!
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <div class="flex items-center mt-2">
          <span *ngIf="product.discountedPrice" class="text-gray-500 line-through mr-2">
            ${{ product.price }}
          </span>
          <span class="text-lg font-bold text-primary-600">
            ${{ product.discountedPrice || product.price }}
          </span>
        </div>
        <p class="mt-2 text-gray-600 text-sm">{{ product.description }}</p>
        <button (click)="addToCart()" 
                class="btn-primary w-full mt-4"
                [disabled]="product.stock === 0">
          {{ product.stock > 0 ? 'Add to Cart' : 'Out of Stock' }}
        </button>
      </div>
    </div>
  `
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}