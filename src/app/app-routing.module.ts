import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';

import { ViewcartComponent } from './component/viewcart/viewcart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ShowproductComponent } from './component/showproduct/showproduct.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { SuccessComponent } from './component/success/success.component';
import { CommanComponent } from './component/comman/comman.component';
import { NextviewcartComponent } from './nextviewcart/nextviewcart.component';


const routes: Routes = [
 
  // {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'',component:ProductComponent},
  // {path:'product',component:ProductComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'viewcart',component:ViewcartComponent},
  {path:'nextviewcart',component:NextviewcartComponent},
  {path:'showproduct/:id',component:ShowproductComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'success',component:SuccessComponent},
  {path:'comman',component:CommanComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
