import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcartComponent } from './shop-component/viewcart/viewcart.component';
import { CheckoutComponent } from './shop-component/checkout/checkout.component';
import { WishlistComponent } from './shop-component/wishlist/wishlist.component';
import { SuccessComponent } from './shop-component/success/success.component';
import { ShowproductComponent } from './shop-component/showproduct/showproduct.component';
import { ValidationComponent } from './validation/validation.component';
import { AuthGuard } from '../authentication/auth.guard';

const routes: Routes = [
  { path: 'viewcart', component:  ViewcartComponent},
  { path: 'checkout', component: CheckoutComponent,canActivate: [AuthGuard] },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'validation', component: ValidationComponent },
  // { path: 'showproduct', component: ShowproductComponent },
  {path:'showproduct/:id',component:ShowproductComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
