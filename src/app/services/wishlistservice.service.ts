import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistserviceService {
  products = JSON.parse(localStorage.getItem("wishlistItem")) || [];
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
    if (!this.hasProducts(product)) {
      this.products.push(product);
      localStorage.setItem("wishlistItem", JSON.stringify(this.products));
     
    } else {
     
    }
  }

  removeFromWishlist(product: any) {
    let index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
      localStorage.setItem("wishlistItem", JSON.stringify(this.products));
    }
  }
}
