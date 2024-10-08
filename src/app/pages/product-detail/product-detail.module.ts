// src/app/pages/product-detail/product-detail.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ProductDetailPage } from './product-detail.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductDetailPage
      }
    ])
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
