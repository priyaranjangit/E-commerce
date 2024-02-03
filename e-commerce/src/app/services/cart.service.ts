import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // products = JSON.parse(localStorage.getItem("cartIteam"))
  // cartProduct: any[] = []
  private productsItems:any[] = [];
  private cartTotal = 0;
  // private cartTotalSubject = new BehaviorSubject<number>(0);
  // products = (localStorage.getItem("cartItem")) || [];
  // cartItems  = new BehaviorSubject<any[]>(this.cartProduct)

  constructor() { }

  // getItems() {
  //   return this.cartItems;
  // }
  getItems(): Observable<any> {
    return of(this.productsItems);
  }

  addToCart(item: any) {
    this.productsItems.push(item);
    // this.cartTotal += item.price;
    // this.cartItems.next(this.cartTotal);

  }
  // addToCart(product: any, quantity: number = 1) {
  //   let item = { product: product, quantity: quantity }
  //   //  JSON.stringify(localStorage.setItem('cartItem',item))
  //   this.cartProduct.push(item)
  //   localStorage.setItem('cartItem', JSON.stringify(this.cartProduct))
  //   console.log('add to cart work');

  // }


  // removeFromCart(product: any) {
  //   let index = this.cartProduct.indexOf(product)
  //   if (index > -1) {
  //     this.cartProduct.splice(index, 1)
  //     // this.cartProduct.push(item)
  //     localStorage.setItem('cartItem', JSON.stringify(this.cartProduct))
  //     console.log('remove work work');

  //   }
  // }
}
