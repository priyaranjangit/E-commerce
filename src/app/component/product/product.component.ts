import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CommanService } from 'src/app/services/comman.service';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('cartAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('200ms', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ transform: 'scale(0.8)', opacity: 0 })),
      ]),
    ]),
  ],
})

export class ProductComponent implements OnInit {
  productData: any[] = [];
  logoColor: string = 'red';
  isRed: boolean = true;
  isClicked = false;
  storageItems: any[] = [];
  // productsItems: any[]=[];
  isMatch: boolean = false;
  matchResult: any
  matchItem: any;
  pro: any;
  matchedItem: any;
  matchedItems: any[] = [];
  // btnText: boolean=true
  isWorking: boolean = true;
  matchedValues: any
  currentColor: string = 'red';
  elementData: any;
  allIteam: any;
  valueIteam: any;
  itamValueID: any;
  match: boolean;
  dontmatch: boolean;
  isConditionMatched: boolean = true;
  resultMessage: string;

  constructor(private commanService: CommanService, private cartService: CartService,
    private wishListService: WishlistserviceService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.allProduct()
    // console.log('ngOninit',
    //   this.storageItems = JSON.parse(localStorage.getItem("cartItem"))
    // );
    this.commanService.getProduct().subscribe((res) => {
      this.allIteam = res
      // console.log('allIteam', this.allIteam);
      // this.allIteam.forEach((value) => {
      //   this.itamValueID = value.id
      //   console.log(`allItamValue`, value.id);

      // })
      
      this.allIteam.find((item) => {
        // debugger
        // console.log('findmethositam', item.id);
        if(item.id==3){
          // console.log('match');
          this.resultMessage = 'ByNow';
          return
        }
        // console.log('dontmatch');
        this.resultMessage = 'Add to Card';
        
        
      })
    });

    // console.log('ghoo',this.productData);
    // Create a new array to store the data from both arrays.


    // this.matchedValues = this.storageItems.filter((object1) =>console.log('object1',object1.product.id) );
    // console.log('kjkj',this.matchedValues);
    this.hasCartItem()


  }

  allProduct() {
    this.commanService.getProduct().subscribe((res) => {
      this.productData = res
      // console.log('product here',this.productData);
    })
  }

  // checkMatch(): void {
  //   this.commanService.getProduct().subscribe((res) => {
  //     this.productData = res
  //     if (res) {
  //       console.log('product here', this.productData);
  //       this.storageItems.forEach((array1Ttem) => {
  //         const matchedItem = this.productData.find(item2 => item2.id === array1Ttem.product.id);
  //         if (matchedItem) {
  //           this.matchedItems.push(matchedItem);
  //           this.isMatch=true

  //         }

  //       })



  //     }
  //   })


  // }

  // addtocart1(item:any){
  //   this.cartService.addToCart1(item)
  // }


  addtocart(item: any) {
    // let arr = this.cartService.cartItems.next(item)
    // console.log(arr)
    // console.log(this.cartService.cartItems.next(item))
    this.cartService.addToCart(item);
    // window.open('/viewcart', '_blank')
    // console.log('item',item);
  }

  buyNow(item: any) {
    this.cartService.addToCart(item);
    this.router.navigate(["/checkout"])
  }

  addToWishlist(item: any) {
    this.isClicked = !this.isClicked;
    // console.log('wishlist', item);
    this.wishListService.addToWishlist(item)
    this.currentColor = this.currentColor === 'red' ? 'black' : 'red';
  }

  onClick() {
    this.isClicked = !this.isClicked;
  }

  // hasCart() {
  //   this.storageItems = JSON.parse(localStorage.getItem('cartItem'))
  //   console.log("pppp", this.cartService.productsItems.find((item)=>item.product.id));
  //   console.log("pppp", this.storageItems);
  //   var result = this.storageItems.find((item) => item.product.id === this.cartService.productsItems.find((item) => item.product.id));
  //   console.log('yuyuy', result);

  // }
  hasCartItem() {
    // debugger
    // this.storageItems 
    //   console.log(`id-${value.product}`);

    // })
    // console.log('this Data is cart item',this.storageItems = JSON.parse(localStorage.getItem("cartItem")));
    // console.log(`this Data is cart item`, this.storageItems = JSON.parse(localStorage.getItem("cartItem")));
    // console.log(`only product item`, this.storageItems);
    this.storageItems.forEach((value) => {
      this.valueIteam = value
      console.log(`value`, this.valueIteam.product.id);

    })


    //  this.allIteam.find((item) => {
    //   // item.product.id === 3.
    //   console.log('datacheck',item);

    //   this.btnText="byNow"
    //   return true
    // })



  }
}
