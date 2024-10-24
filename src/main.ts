import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { CartComponent } from './app/components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a href="/" class="text-2xl font-bold text-primary-600">E-Shop</a>
          <div class="flex items-center gap-6">
            <a href="/products" class="hover:text-primary-600">Products</a>
            <a href="/cart" class="hover:text-primary-600">Cart</a>
            <a href="/profile" class="hover:text-primary-600">Profile</a>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="bg-gray-100 mt-12">
      <div class="container mx-auto px-4 py-8">
        <p class="text-center text-gray-600">© 2024 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class App {
  constructor() {}
}

const routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));