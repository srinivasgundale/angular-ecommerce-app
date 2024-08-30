// src/app/components/header/header.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header as HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Import RouterModule
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
