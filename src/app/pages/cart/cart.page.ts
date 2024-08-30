import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;


  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  // Update quantity
  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateCart(productId, quantity);
  }

  // Remove item from cart
  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCart();  // Refresh cart items
  }

  // Clear the cart
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}


