import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AddressComponent } from './address/address.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { AuthGuard } from '../authentication/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"userProfile",pathMatch:"full"},
  {path:"",component:ProfileComponent,
  children:[
    {path:'userProfile',component:UserprofileComponent},
    {path:'address',component:AddressComponent},
    {path:'orderHistory',component:OrderhistoryComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
