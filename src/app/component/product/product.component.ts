import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CommanService } from 'src/app/services/comman.service';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';
import { trigger, transition, state, style, animate } from '@angular/animations';
// import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {
  NgxUiLoaderService
} from "ngx-ui-loader";
import { Wishlist2Service } from 'src/app/services/wishlist2.service';
import { SerchingService } from 'src/app/services/serching.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('fountainAnimation', [
      state('initial', style({
        transform: 'translateY(0)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translateY(-200px)',
        opacity: 1
      })),
      transition('initial => final', animate('2000ms ease-in-out')),
      transition('final => initial', animate('200ms ease-out'))
    ])
  ]
})

export class ProductComponent implements OnInit {
  banner = false;
  productData: any[] = [];
  loading = false;
  storageItems: any[] = [];
  // productsItems: any[]=[];
  isActive: boolean = true;
  pro: any;
  matchedItem: any;
  matchedItems: any[] = [];
  currentColor: string = 'red';
  elementData: any;
  allIteam: any;
  valueIteam: any;
  itamValueID: any;
  match: boolean;
  dontmatch: boolean;
  isConditionMatched: boolean = true;
  resultMessage: string;
  addCartData = JSON.parse(localStorage.getItem("cartItem"));
  // addedToCart: boolean=false
  valueId: 5;
  // matchedItems:any = [];
  animationState: string = 'initial';
  loadingStates: boolean[] = [];
  isLoading: boolean = true;
  searchData: string = '';

  constructor(private commanService: CommanService, private cartService: CartService,
    private wishListService: WishlistserviceService,
    private router: Router,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService,
    private wishlist2: Wishlist2Service,
    private serchIng:SerchingService) {

    }

    ngOnInit(): void {
setTimeout(() => {
  this.banner = true;
},2000);

      this.commanService.getProduct().subscribe((res)=>{
        console.log(res);
      })
      this.serchIng.currentSearchData.subscribe(data => this.searchData = data);
    // Method to trigger animation

    // debugger
    // localStorage.setItem('checklocalData', 'true');
    // console.log('checklocalData',(localStorage.getItem() ));

    this.ngxLoader.start();
    this.commanService.getProduct().subscribe((res) => {
      debugger
      this.allIteam = res.map((product) => {
        return ({ ...product, addedToCart: localStorage.getItem('addCartItem_' + product.id) === 'true', wishList: localStorage.getItem('addWishList_' + product.id) === 'true' })
      })
      this.loadingStates = new Array(this.allIteam.length).fill(false);
      // let mapdata=res.map(product=>{
      //  return (Object.assign({},product,{cartdata:false}))
      // })
      // console.log('maping data',mapdata);
      this.ngxLoader.stop();
      console.log('addcartItam', this.allIteam);
    });
  }


  addtocart(item: any,index) {
    this.loadingStates[index] = true;
    this.loading = true;
    setTimeout(() => {
      this.loadingStates[index] = false;
      this.cartService.addToCart(item);
      localStorage.setItem('addCartItem_' + item.id, 'true');
      item.addedToCart = true
      console.log('PraticularData', item);
      this.toastr.success(`Your product ${item.title} Added in CartItem!`, 'Success');
    }, 800);

  }

  addToWish(item: any) {
    console.log('item', item);
    // debugger
    if (!item.wishList) {
      this.toastr.success(`Your product ${item.title} Added in wishList!`, 'Success');
      item.wishList = true
      localStorage.setItem('addWishList_' + item.id, 'true');
      this.wishListService.addToWishlist(item)
      // localStorage.setItem("wishlistItem", JSON.stringify(item));
      console.log('addToWishElse', item);
    }
    else {
      item.wishList = false
      localStorage.setItem('addWishList_' + item.id, 'false');
      console.log('addToWishElse', item);
      this.wishListService.removeFromWishlist(item)
      this.toastr.error(`Your product ${item.title} Remove in wishList!`, 'Remove');
    }
  }

  GoToWish(item) {
    console.log('inProductComponent', item);
    this.wishlist2.wishItam(item)
  }
}
