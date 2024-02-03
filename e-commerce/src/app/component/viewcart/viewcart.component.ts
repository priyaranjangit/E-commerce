import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {

  emptyCartImage="assets/images/catr.png"
  // pathImage="assets/images/cart.png"
  // products = JSON.parse(localStorage.getItem("cartItem"))
  setProduct=JSON.stringify(localStorage.setItem('cartItem','cartItem'))
  products: any;
  shoppingCartProduct: any;
  emptyCart:any
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // this.products = (localStorage.getItem("cartItem")) || [];
    // JSON.parse(this.products)
    this.cartService.getItems().subscribe((res)=>{
      this.shoppingCartProduct=res
      this.emptyCart=res.length
      console.log('all product here',res);
      console.log('all product here',this.emptyCart);
      
    })

  }

}
