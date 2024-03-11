import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Wishlist2Service {
  private setWishItem = JSON.parse(localStorage.getItem("wishlistItem")) || [];
  // users = [2,3];
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
  ];
  constructor() { }

 

  // getItems(): Observable<any> {
  //   return of(this.productsItems);
  // }

  hasProducts(product: any): boolean {
    let item = this.setWishItem.find((item: any) => item.id === product.id);
    return item !== undefined;
  }

  wishItam(product: any) {
    if (!this.hasProducts(product)) {
      this.setWishItem.push(product);
      localStorage.setItem("wishlistItem_", JSON.stringify(this.setWishItem));
      console.log('cartserice',this.setWishItem);
    } else {
    }
  
  }
  getWishList(): Observable<any>{
    return of(this.setWishItem)
  }
 
}
