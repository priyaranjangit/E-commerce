import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showHeader: boolean = true;
  public totalCartIteam: any[] = [] ;
  public searchTerm !: string;
  constructor(private cartService:CartService,private router:Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.url.includes('/viewcart');
      }
    });
  
  }

  ngOnInit(): void {
    this.cartService.getItems().subscribe((res)=>{
      this.totalCartIteam=res
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    // this.cartService.search.next(this.searchTerm);
  }
  goToWishList(){
    this.router.navigate(['/wishlist'])
  }
}
