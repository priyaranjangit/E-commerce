import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];
  productsItems = JSON.parse(localStorage.getItem("cartItem")) || [];
  // private productsItems: any[] = [];
  // cartItems = new BehaviorSubject<any[]>(this.productsItems)
  constructor() {
   
    
  }

  // hasItem() {
  //   return this.productsItems
  // }
  // getItems(): Observable<any> {
  //   // debugger
  //   return this.cartItems
  // }
  getItems(): Observable<any> {
    return of(this.productsItems);

  }

  addToCart(product: any, quantity: number = 1) {
    // let items:any
    let hasItem = this.productsItems.find((products: any, index: number) => {
      console.log('cartservice',this.productsItems);
      
      if (products.product.id === product.id) {
        let Qty = products.quantity + quantity
        if (Qty != 0) {
          console.log('quentity', this.productsItems[index]);
          this.productsItems[index].quantity = Qty;
          localStorage.setItem("cartItem", JSON.stringify(this.productsItems));
        }
        return true
      }
      return false
    });
    if (!hasItem) {
      this.items = { product: product, quantity: quantity };
      this.productsItems.push(this.items);
      localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
    }
  }

// 3rd time for git coomit chacke
addtoCrd3(){
console.log(`this time commit for git`);

}

// 2mera logivc
// addToCart(product: any, quantity: number = 1){

//   let check=this.productsItems.find((products,index )=>{
//     if(products.product.id===product.id){
//       console.log('ites match ',product);
//       // let qun=products.quantity+quantity
//       let Qty = products.quantity + quantity
//       console.log('quntity',this.productsItems[index].quantity);
//       this.productsItems[index].quantity=Qty
//       console.log('quntity',Qty);
//       console.log('item_with_total',this.productsItems);
      
//     }
// console.log('check',check);

    
//   })
// console.log(`product `,product);
// this.items = { product: product, quantity: quantity };
// this.productsItems.push(this.items )
// console.log(`list of product`,this.productsItems);

// console.log('check',check);

// }

// meralogic 1
// addToCart(product: any, quantity: number = 1) {
  // if(this.productsItems.find((products,index)=>{
  //   console.log(`this function work for add to cart`);
  //   products.product.id===product.id
  //   let qty=products.quantity+quantity
  //   this.productsItems[index].quantity = qty;
  //   localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
  //   return true
  // }
  
  // )){
    
  // } console.log(`this area is else steatement`);
  //   this.items = { product: product, quantity: quantity };
  //   this.productsItems.push(this.items)
  //    localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
  
  // }

  getTotal() {
    return this.productsItems.reduce((total: number, item: any) => {
      return total + (item.product.price * item.quantity)
    }, 0)
  }
 

  removeToCart(item: any) {
    console.log('remove work work');
    let index = this.productsItems.indexOf(item)
    if (index > -1) {
      this.productsItems.splice(index, 1)
      localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
      console.log('remove work work222');
    }
  }
}
