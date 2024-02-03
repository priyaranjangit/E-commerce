import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderDetails: any;

  constructor(private router: Router) { }

  createOrder(obj:any) {
    this.orderDetails = obj;
    this.router.navigate(['/success']);
  }

  getOrderItens(): any {
    return this.orderDetails;
  }

}
