import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { CommanComponent } from './component/comman/comman.component';
import { FooterComponent } from './component/footer/footer.component';
// import { NextviewcartComponent } from './nextviewcart/nextviewcart.component';
import { ToastrModule } from 'ngx-toastr';
// import { NgxUiLoaderModule } from "ngx-ui-loader";
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule
} from 'ngx-ui-loader';
import { AuthenticationModule } from './authentication/authentication.module';
import { ShopModule } from './shop/shop.module';
import { HeadTopComponent } from './component/head-top/head-top.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { SetSliderComponent } from './component/set-slider/set-slider.component';
import { SetHorzSliderComponent } from './component/set-horz-slider/set-horz-slider.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  // bgsOpacity: 0.5,
  // bgsPosition: POSITION.bottomLeft,
  bgsSize: 60,
  // bgsType: SPINNER.chasingDots,
  blur: 35,
  // delay: 0,
  fastFadeOut: true,
  fgsColor: 'blue',
  // fgsPosition: POSITION.centerCenter,
  fgsSize: 90,
  // fgsType: SPINNER.chasingDots,
  // gap: 24,
  // logoPosition: POSITION.centerCenter,
  // logoSize: 120,
  // logoUrl: 'assets/angular.png',
  // overlayBorderRadius: '0',
  // overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  // pbDirection: PB_DIRECTION.leftToRight,
  // pbThickness: 5,
  hasProgressBar: false,
  // text: 'Welcome to ngx-ui-loader',
  // textColor: '#FFFFFF',
  // textPosition: POSITION.centerCenter,
  // maxTime: -1,
  // minTime: 500
}

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    // ViewcartComponent,
    // CheckoutComponent,
    // ShowproductComponent,
    // WishlistComponent,
    // SuccessComponent,
    CommanComponent,
    FooterComponent,
    HeadTopComponent,
    TruncatePipe,
    SetSliderComponent,
    SetHorzSliderComponent,
    // NextviewcartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxImgZoomModule,
    NgxUiLoaderModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

    // ToastrModule.forRoot({
    //   positionClass: 'toast-bottom-center', // Position to display toasts at the bottom center
    // }),
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 10000, // 10 seconds
      progressBar: true,
      positionClass: 'toast-top-center'

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
