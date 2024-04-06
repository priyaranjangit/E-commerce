import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ViewcartComponent } from './shop-component/viewcart/viewcart.component';
import { CheckoutComponent } from './shop-component/checkout/checkout.component';
import { WishlistComponent } from './shop-component/wishlist/wishlist.component';
import { SuccessComponent } from './shop-component/success/success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { ShowproductComponent } from './shop-component/showproduct/showproduct.component';
import { ValidationComponent } from './validation/validation.component';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { SideCarouselComponent } from './side-carousel/side-carousel.component';


// import { NguCarouselModule } from '@ngu/carousel';
// import { NgxImgZoomModule } from 'ngx-img-zoom';



@NgModule({
  declarations: [
    ViewcartComponent,
    CheckoutComponent,
    WishlistComponent,
    SuccessComponent,
    CheckoutComponent,
    ShowproductComponent,
    ValidationComponent,
    SideCarouselComponent
  ],
  imports: [
    HttpClientModule,
    NgbCarouselModule,
    FormsModule,
    CommonModule,
    ShopRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxImgZoomModule,
    FormsModule,
    // NguCarouselModule,
    
    
  ]
})
export class ShopModule { 
  
}
// export class CaptchaModule {
 
// }
