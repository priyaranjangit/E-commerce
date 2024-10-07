import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  // newcart item set open

  cartItem: any = JSON.parse(localStorage.getItem("cartItem")) ||  []

  // newcart item set close
  items: any = [];
  productsItems = JSON.parse(localStorage.getItem("cartItem")) || [];

  // private productsItems: any[] = [];
  // cartItems = new BehaviorSubject<any[]>(this.productsItems)
  constructor() { }

  getItems(): Observable<any> {
    return of(this.productsItems);

  }
  getItems1(): Observable<any> {
    return of(this.productsItems);

  }

  addToCart(product: any,quantity: number = 1) {
    console.log('addedToCart');
    
    // debugger
    // let items:any
    let hasItem = this.productsItems.find((products: any, index: number) => {
      console.log('products', products);
      // console.log('quentity', this.productsItems[1]);
      if (products.product.id === product.id) {
        let Qty = products.quantity + quantity
        if (Qty != 0) {
          this.productsItems[index].quantity = Qty;
          localStorage.setItem("cartItem", JSON.stringify(this.productsItems));
        }
        return true
      }
      return false
    });
    console.log('hasitem', hasItem);
    if (!hasItem) {
      this.items = { product: product, quantity: quantity };
      // console.log('checkItem', product);
      // console.log('itemPush', this.items);
      this.productsItems.push(this.items);
      localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
    }
  }

  // 3rd time for git coomit chacke
  addToCart4(product,addedToCart, quantity = 1) {
    console.log('addcart',addedToCart);
    
    // debugger
    let isItem = this.productsItems.find((val, inx) => {
      if (val.id === product.id) {
        let incQun = val.quantity + quantity
        this.productsItems[inx].quantity = incQun
        localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
        return true
      }
      return false
    })
    console.log('return item', isItem);
    if (!isItem) {
      this.items = { product: product, quantity: quantity };
      this.productsItems.push(this.items);
      localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
    }
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

  // addToCart(product, qun = 1) {

  //   const item = this.cartItem.find((value, indx) => {
  //     // debugger
  //     if (value.product.id == product.id) {
  //       let Qty = value.product.qun + qun
  //       this.cartItem[indx].qun = Qty
  //      console.log('qty',this.cartItem[indx].qun);
  //       localStorage.setItem("cartItem", JSON.stringify(this.cartItem))
  //       return true
  //     }
  //     return false
  //   })

  //   if (!item) {
  //     // const product={}
  //     product.qun = qun
  //     const products={
  //       product:product
  //     }
  //     let proItem = Object.assign({},products)
  //     this.cartItem.push(proItem)
  //     console.log('inArray', this.cartItem);
  //     localStorage.setItem("cartItem", JSON.stringify(this.cartItem))
  //   }
  // }

  getTotal() {
    return this.productsItems.reduce((total: number, item: any) => {
      return total + (item.product.price * item.quantity)
    }, 0)

  }


  removeAllCart(){
    // localStorage.removeItem('cartItem')
    // // localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
    // this.productsItems=JSON.parse(localStorage.getItem("cartItem")) || [];
    // localStorage.setItem('cartItem_' , 'false');
    // localStorage.setItem('addCartItem_','false')

  }

  removeToCart(item: any) {
    localStorage.setItem('cartItem_' + item.id, 'false');
    console.log('remove work work');
    let index = this.productsItems.indexOf(item)
    if (index > -1) {
      this.productsItems.splice(index, 1)
      localStorage.setItem("cartItem", JSON.stringify(this.productsItems))
      console.log('remove work work222');
    }
  }
}
