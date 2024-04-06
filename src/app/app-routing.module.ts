import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';

import { ViewcartComponent } from './shop/shop-component/viewcart/viewcart.component';
import { CheckoutComponent } from './shop/shop-component/checkout/checkout.component';
import { ShowproductComponent } from './shop/shop-component/showproduct/showproduct.component';
import { WishlistComponent } from './shop/shop-component/wishlist/wishlist.component';
import { SuccessComponent } from './shop/shop-component/success/success.component';
import { CommanComponent } from './component/comman/comman.component';
import { NextviewcartComponent } from './nextviewcart/nextviewcart.component';
import { contentRoutes } from './routes/content.routes';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/authenticationComponent/login/login.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';


const routes: Routes = [
 
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'',component:ProductComponent},
  // {path:'login',component:LoginComponent},
  // {path:'',loadChildren:()=>import('../shop/shop.module').then(m=>m.ShopModule)},
  {path:'login',loadChildren:()=>import('../app/authentication/authentication.module').then(m=>m.AuthenticationModule)},
  {path:"profile",loadChildren:()=>import('../app/profile/profile.module').then(m=>m.ProfileModule),canActivate:[AuthGuard]},
  {path:'',children:contentRoutes},
  {path:'**',component:PagenotfoundComponent},
  // {path:'',children:contentRoutes,canActivate: [AuthGuard]},

  // {path:'product',component:ProductComponent},
  // {path:'checkout',component:CheckoutComponent},
  // {path:'viewcart',component:ViewcartComponent},
  // {path:'nextviewcart',component:NextviewcartComponent},
  // {path:'showproduct/:id',component:ShowproductComponent},
  // {path:'wishlist',component:WishlistComponent},
  // {path:'success',component:SuccessComponent},
  // {path:'comman',component:CommanComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
