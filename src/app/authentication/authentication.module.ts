import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './authenticationComponent/login/login.component';
import { SignupComponent } from './authenticationComponent/signup/signup.component';
import { CheckoutComponent } from '../shop/shop-component/checkout/checkout.component';
import { WishlistComponent } from '../shop/shop-component/wishlist/wishlist.component';
import { ViewcartComponent } from '../shop/shop-component/viewcart/viewcart.component';
import { SuccessComponent } from '../shop/shop-component/success/success.component';
import { ShowproductComponent } from '../shop/shop-component/showproduct/showproduct.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImgZoomModule } from 'ngx-img-zoom';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    // CheckoutComponent,
    // WishlistComponent,
    // ViewcartComponent,
    // SuccessComponent,
    // ShowproductComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxImgZoomModule,

    
  ]
})
export class AuthenticationModule { }
