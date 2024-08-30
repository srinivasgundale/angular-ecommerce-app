// src/app/pages/cart/cart.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CartPage } from './cart.page';
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
        component: CartPage
      }
    ])
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
