// src/app/services/cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() {}

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartItemCount.next(this.cart.length);
  }

  updateCart(productId: number, quantity: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.cartItemCount.next(this.cart.length);
    }
  }

  clearCart() {
    this.cart = [];
    this.cartItemCount.next(this.cart.length);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity!), 0);
  }
}
