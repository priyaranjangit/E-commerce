import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Wishlist2Service } from 'src/app/services/wishlist2.service';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: any=(localStorage.getItem("wishlistItem_"))||[];
  remove: string;

  
  constructor(private cartService: CartService,private wishListService:WishlistserviceService,
   private wishlistService2:Wishlist2Service) { }

  ngOnInit() {
    this.wishListService.getItems().subscribe(res => {
      this.wishlistItems = res;
      console.log('res',res);
    });
    
    // this.wishlistItems = JSON.parse(localStorage.getItem("wishlistItem_")) ||[]
    // console.log('length',this.wishlistItems.length);
  }

  // getTotalAmout(){
  //   return this.cartService.getTotal()
  // }

  removeCart(product: any) {
    console.log('data',product);
    // localStorage.setItem('addWishList'+product.id, 'false'); 
    this.wishListService.removeFromWishlist(product)
  }
}
