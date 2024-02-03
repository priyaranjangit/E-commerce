import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxImgZoomService } from 'ngx-img-zoom';
import { CartService } from 'src/app/services/cart.service';
import { CommanService } from 'src/app/services/comman.service';
// import { CommanService } from 'e-commerce/src/app/services/comman.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.scss']
})
export class ShowproductComponent implements OnInit {
  product: any;
  userId: any;
  counter: number=1;
  enableZoom: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, 
    private commanService: CommanService,
     private cartService: CartService,
     private router:Router,
     private ngxImgZoom: NgxImgZoomService) {
      this.ngxImgZoom.setZoomBreakPoints([{w: 100, h: 100}, {w: 150, h: 150}, {w: 200, h: 200}, {w: 250, h: 250}, {w: 300, h: 300}]);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
    });
    console.log('product', this.userId);
    this.commanService.singleProduct(this.userId).subscribe(res => {
      this.product = res;
      console.log('product', this.product);
    });
  }

  increase() {
    this.counter += 1
  }

  decrease() {
    if (this.counter > 1)
      this.counter -= 1
  }

  buyNow(product:any,quntity:number=1){
    if(quntity>0){
      this.cartService.addToCart(product,quntity)
      this.router.navigate(['/checkout'])

    }
  }
}
