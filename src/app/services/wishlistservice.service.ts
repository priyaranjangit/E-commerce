import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistserviceService {
  products:any = localStorage.getItem("wishList")|| [];
  constructor() { }

  getItems(): Observable<any[]> {
    return of(this.products);
  }

  hasProducts(product: any): boolean {
    let item = this.products.find((item: any) => item.id === product.id);
    return item !== undefined;
  }

  // hasProducts(product: Product) {
  //   let item = this.products.find((item: Product) => item.id === product.id);
  //   return item ;
  // }

  addToWishlist(product: any) {
      product.wishList= true
    localStorage.setItem("addWishList_"+ this.products.id,'true');
    this.products.push(product);
    localStorage.setItem("wishList", JSON.stringify(this.products));
    // if (!this.hasProducts(product)) {
    //   localStorage.setItem("addWishList_"+ this.products.id,'true');
    //   this.products.push(product);
    //   localStorage.setItem("wishList", JSON.stringify(this.products));
    //   // localStorage.setItem('addWishList_'+item.id, 'true');
    //   console.log('cartserice',this.products);
    // } else {
     
    // }
  
  }

  removeFromWishlist(product: any) {
    localStorage.setItem("addWishList_"+ product.id,'false');
    let index = this.products.indexOf(product);
    // this.products.wishList=false
    // this.products.splice(index, 1);
    // localStorage.removeItem("wishList");
    console.log('remove,',product);
    // let index = this.products.indexOf(item)
    if (index > -1) {
      // localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
      this.products.splice(index, 1)
      localStorage.setItem("wishList", this.products)
      console.log('remove work work222');
    }
    // this.wishListService.removeFromWishlist(product)
    // localStorage.setItem('addWishList'+product.id, 'false'); 
    // if (index > -1) {
    //   this.products.wishList=false
    //   this.products.splice(index, 1);
    //   localStorage.setItem("wishlistItem_"+ this.products.id,'false');
    //   // localStorage.removeItem("wishList");
    //   console.log('remove,',product);
    // }
  }
}
