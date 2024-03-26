import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcartComponent } from '../shop/shop-component/viewcart/viewcart.component';
import { CheckoutComponent } from '../shop/shop-component/checkout/checkout.component';
import { LoginComponent } from './authenticationComponent/login/login.component';
import { SignupComponent } from './authenticationComponent/signup/signup.component';
import { WishlistComponent } from '../shop/shop-component/wishlist/wishlist.component';
import { SuccessComponent } from '../shop/shop-component/success/success.component';
import { ShowproductComponent } from '../shop/shop-component/showproduct/showproduct.component';


const routes: Routes = [ 
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
