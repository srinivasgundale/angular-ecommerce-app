// src/app/components/layout/layout.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Header as HeaderComponent } from '../header/header.component';
//import { FooterComponent } from '../footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
