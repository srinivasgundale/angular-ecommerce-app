import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductService } from './services/product.service';  // Import ProductService
import { CartService } from './services/cart.service';        // Import CartService
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProductService,  // Provide ProductService
    CartService      // Provide CartService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
