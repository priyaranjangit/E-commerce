import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {

  emptyCartImage = "assets/images/catr.png"
  // pathImage="assets/images/cart.png"
  shoppingCartProduct = JSON.parse(localStorage.getItem("cartItem"))
  // setProduct = JSON.stringify(localStorage.setItem('cartItem', 'cartItem'))
  // products: any;
  // shoppingCartProduct: any;
  emptyCart: any
  total: void;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe((res) => {
      this.shoppingCartProduct = res
      console.log('all product here', res);
    })

  }

  getTotalAmout(){
    return this.cartService.getTotal()
  }

  increment(product: any, quentity: number = 1) {
    console.log('increment', product);
    this.cartService.addToCart(product, quentity)

  }

  decrement(product: any, quantity: number = -1) {
    console.log('decerement', product);
    this.cartService.addToCart(product, quantity)
  }

  removeCart(product: any) {
    console.log('data',product);
    this.cartService.removeToCart(product)
  }
  
}
