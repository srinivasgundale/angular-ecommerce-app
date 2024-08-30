import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductListingPageRoutingModule } from './product-listing-routing.module';
import { ProductListingPage } from './product-listing.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListingPageRoutingModule,
    LayoutModule
  ],
  declarations: [ProductListingPage]
})
export class ProductListingPageModule {}
