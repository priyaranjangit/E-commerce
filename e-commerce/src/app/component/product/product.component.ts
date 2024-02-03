import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productData: any;

  constructor(private commanService:CommanService,private cartService:CartService) { }

  ngOnInit(): void {
    this.allProduct()
  }

    
  
  allProduct(){
    this.commanService.getProduct().subscribe((res)=>{
      this.productData=res
      // console.log('product here',this.productData);
      
    })
  }
  
  addtocart(item: any){
    // let arr = this.cartService.cartItems.next(item)
    // console.log(arr)
    // console.log(this.cartService.cartItems.next(item))

    this.cartService.addToCart(item);
    // console.log('item',item);
    
    
  }
}
