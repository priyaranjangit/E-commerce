import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nextviewcart',
  templateUrl: './nextviewcart.component.html',
  styleUrls: ['./nextviewcart.component.scss']
})
export class NextviewcartComponent implements OnInit {

  emptyCartImage = "assets/images/catr.png"
  // pathImage="assets/images/cart.png"
  shoppingCartProduct = JSON.parse(localStorage.getItem("cartItem"))
  // setProduct = JSON.stringify(localStorage.setItem('cartItem', 'cartItem'))
  // products: any;
  // shoppingCartProduct: any;
  emptyCart: any
  constructor(private cratServise:CartService) { }

  ngOnInit(): void {
    this.cratServise.getItems1().subscribe((res) => {
      this.shoppingCartProduct = res
      console.log('all product here', res);
    })
    console.log('data',this.shoppingCartProduct);
  }

  increment(product: any) {
    console.log('increment', product);
    // this.cratServise.addToCart(product)

  }

  decrement(product: any, quantity: number = -1) {
    console.log('decerement', product);
    // this.cratServise.addToCart(product, quantity)
  }

  removeCart(product: any) {
    console.log('data',product);
    this.cratServise.removeToCart(product)
  }

}
