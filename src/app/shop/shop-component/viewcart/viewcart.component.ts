import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Wishlist2Service } from 'src/app/services/wishlist2.service';
import Swal from 'sweetalert2';

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
  shoppingCartProductIndex: any;
  itemIndex: any;
  constructor(private cartService: CartService, private toastr: ToastrService,
    private wishListService: Wishlist2Service) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe((res) => {
      this.shoppingCartProduct = res
      console.log('all product here', res);
    })
    // this.shoppingCartProduct=this.cartService.getItems().subscribe(res=>res.map((val,index)=>{
    //   this.shoppingCartProductIndex=index
    //   console.log('shoppingCartProductIndex',index,val,this.shoppingCartProduct);
    //   return val

    // }))

  }

  getTotalAmout() {
    return this.cartService.getTotal()
  }

  increment(product: any, quentity: number = 1) {
    console.log('increment', product);
    this.cartService.addToCart(product, quentity)
    this.toastr.warning(`Your product quantity increse !`,);

  }

  decrement(product: any, index, quantity: number = -1) {
    console.log('decerement', product);
    console.log('indexing', index);
    console.log('shoppingCartProduct', this.shoppingCartProduct.quantity);

    if (this.shoppingCartProduct[index].quantity == 1) {
      this.toastr.error(`Product quantity in your cart must be minimum 1 !`,);
    } else {
      this.toastr.error(`Your product quantity decerement !`,);
      this.cartService.addToCart(product, quantity)
    }
  }

  removeCart(product: any) {
    Swal.fire({
      title: "Do you want to Remove the Product?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "remove",
      cancelButtonColor: "#17a2b8",
      confirmButtonColor: "#dc3545",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log('addCartItem_', product.product.id);
        localStorage.setItem('addCartItem_' + product.product.id, 'false');
        this.cartService.removeToCart(product)
        this.toastr.error(`Successfully removed ${product.product.title}  from your cart!`, 'Remove');
      }
    });
  }

}
