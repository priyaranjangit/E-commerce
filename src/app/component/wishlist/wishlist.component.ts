import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[];

  
  constructor(private cartService: CartService,private wishListService:WishlistserviceService) { }

  ngOnInit(): void {
    this.wishListService.getItems().subscribe(res => {
      this.wishlistItems = res;
    });

  }

  getTotalAmout(){
    return this.cartService.getTotal()
  }

  removeCart(product: any) {
    console.log('data',product);
    this.wishListService.removeFromWishlist(product)
  }
}
