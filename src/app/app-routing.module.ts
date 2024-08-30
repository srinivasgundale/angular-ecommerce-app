import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product-listing', pathMatch: 'full' },  // Default route
  {
    path: 'product-listing',
    loadChildren: () => import('./pages/product-listing/product-listing.module').then(m => m.ProductListingPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  // {
  //   path: 'checkout',
  //   loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
