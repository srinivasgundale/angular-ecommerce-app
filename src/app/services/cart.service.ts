import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  private readonly CART_KEY = 'cart';

  constructor() {
    this.loadCart();
  }

  // Load cart from localStorage
  private loadCart() {
    const storedCart = localStorage.getItem(this.CART_KEY);
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.cartItemCount.next(this.cart.length);
    }
  }

  // Save cart to localStorage
  private saveCart() {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.cart));
    this.cartItemCount.next(this.cart.length);
  }

  getCart(): Product[] {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.saveCart();
  }

  updateCart(productId: number, quantity: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.quantity = quantity;
      this.saveCart();
    }
  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity!), 0);
  }

  isInCart(productId: number) {
    return this.cart.find(item => item.id === productId);
  }
}
