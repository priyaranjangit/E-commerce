import { Component, OnInit, HostListener } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { SerchingService } from 'src/app/services/serching.service';

@Component({
  selector: 'app-head-top',
  templateUrl: './head-top.component.html',
  styleUrls: ['./head-top.component.scss']
})
export class HeadTopComponent implements OnInit {
  isSticky = false;
  userDetails:any
  searchText:any
  // userData=JSON.stringify( localStorage.getItem())
  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    this.isSticky = scrollPosition >= 1; // Change 100 to the desired scroll position where the header becomes sticky
  }
  showHeader: boolean = true;
  public totalCartIteam: any[] = [];
  public searchTerm !: string;
  constructor(private cartService: CartService, private router: Router, private authService: AuthService,private serchIng:SerchingService) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.showHeader = !event.url.includes('/viewcart');
    //   }
    // });
  }


KeyUp(){

}

  ngOnInit(): void {
    // this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    // this.cartService.getItems().subscribe((res) => {
      //   this.totalCartIteam = res
      // })
      // this.authService.getUserData().subscribe((res=>{
        //   this.userDetails=res
        //   console.log('head-Top-oniti',res);
        //   console.log('userDetails', this.userDetails);
        
        // }))
      }
      ngDoCheck(){
        this.serchIng.setSearchData(this.searchText)
    this.cartService.getItems().subscribe((res) => {
      this.totalCartIteam = res
    })  
    this.authService.getUserData().subscribe((res=>{
      this.userDetails=res
      // console.log('head-Top-oniti',res);
      // console.log('userDetails', this.userDetails);
      
    }))

  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    // this.cartService.search.next(this.searchTerm);
  }
  goToWishList() {
    this.router.navigate(['/wishlist'])
  }

  logOut() {
    this.cartService.removeAllCart()
    // localStorage.removeItem("cartItem");
    this.authService.logout()
  }

}
