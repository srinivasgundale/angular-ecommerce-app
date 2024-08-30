import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';
import { Inject } from '@angular/core';
// Define the Product interface
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.page.html',
  styleUrls: ['./product-listing.page.scss'],
})
export class ProductListingPage implements OnInit {
  // Explicitly type the products array as an array of Product objects
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    @Inject(CartService) private cartService: CartService
  ) {}

  ngOnInit() {
    // Fetch the products and assign them to the products array
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products;  // Adjust based on API response structure
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    //alert(`${product.title} has been added to your cart.`);
  }
  isInCart(productId: number) {
    return this.cartService.isInCart(productId);
  }

  toggleCartItem(product: any) {
    console.log("🚀 ~ ProductListingPage ~ toggleCartItem ~ product:", product)

    if (this.isInCart(product.id)) {
      this.cartService.removeFromCart(product);
    } else {
      this.cartService.addToCart(product);
    }
  }
}
