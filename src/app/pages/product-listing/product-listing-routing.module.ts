import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingPage } from './product-listing.page';

const routes: Routes = [
  {
    path: '',
    component: ProductListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListingPageRoutingModule {}
