// src/app/services/cart.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];  // Array to hold cart items

  constructor() {}

  // Add a product to the cart
  addToCart(product: Product) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      existingProduct.quantity! += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  // Get all items in the cart
  getCart(): Product[] {
    return this.cart;
  }

  // Update the quantity of a product in the cart
  updateCart(productId: number, quantity: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  }

  // Remove a product from the cart
  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  // Clear the entire cart
  clearCart() {
    this.cart = [];
  }

  // Get the total price of items in the cart
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity!), 0);
  }
}
