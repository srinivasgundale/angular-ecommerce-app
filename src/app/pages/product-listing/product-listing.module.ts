import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductListingPageRoutingModule } from './product-listing-routing.module';
import { ProductListingPage } from './product-listing.page';
import { HeaderModule } from '../../components/header/header.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListingPageRoutingModule,
    HeaderModule
  ],
  declarations: [ProductListingPage]
})
export class ProductListingPageModule {}
