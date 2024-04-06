import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { AddressComponent } from './address/address.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SideBarProfileComponent } from './side-bar-profile/side-bar-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    OrderhistoryComponent,
    AddressComponent,
    UserprofileComponent,
    SideBarProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
