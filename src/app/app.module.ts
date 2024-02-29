import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewcartComponent } from './component/viewcart/viewcart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ShowproductComponent } from './component/showproduct/showproduct.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessComponent } from './component/success/success.component';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { CommanComponent } from './component/comman/comman.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    ViewcartComponent,
    CheckoutComponent,
    ShowproductComponent,
    WishlistComponent,
    SuccessComponent,
    CommanComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxImgZoomModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
