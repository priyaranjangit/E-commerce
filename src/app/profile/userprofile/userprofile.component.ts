import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  userImage = "assets/images/user.png";
  fullName:string="";
  email:string="";
  address:string="";
  constructor() { }

  ngOnInit(): void {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log('user',userDetails);
    this.fullName=userDetails.firstName+userDetails.lastName
    this.email=userDetails.email
    this.address=userDetails.address

    
    // this.userImage = (userDetails.imagePath == "" || userDetails.imagePath == null) ? "/assets/images/user.png": Global.BASE_USERS_IMAGES_PATH + userDetails.imagePath;
  }

}
