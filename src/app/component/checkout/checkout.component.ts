import { Component, NgZone, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomWindow } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CommanService } from 'src/app/services/comman.service';
import { OrderService } from 'src/app/services/order.service';
import { RozService } from 'src/app/services/roz.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkOutProduct: any[] = [];
  addressPickup = JSON.parse(localStorage.getItem('address')) || []
  addressSave:any[]=[]
  totalIteams: number;
  shippingCost = 40.00
  checkoutForm: any;
  totalAmount: number;
  amount: number;
  form: any = {};
  paymentId: string;
  error: string;
  handler: any;
  private _window: ICustomWindow;
  raz: any;
  // items: any;

  constructor(private cartService: CartService,
    private httpService: CommanService,
    private router: Router, private formBuilder: FormBuilder,
    private zone: NgZone, private _auth: RozService,
    private orderService: OrderService) { this._window = this._auth.nativeWindow; }

  ngOnInit(): void {


    this.checkoutForm = new FormGroup({
      items: new FormArray([
        this.createAddress()
      ])
    });

    // console.log('form lenght',this.checkoutForm.length);

    // this.loadStripe()
    // this.createRegForm()
    this.cartService.getItems().subscribe((res) => {
      // debugger
      this.checkOutProduct = res
      if (this.checkOutProduct.length > 0) {
        this.totalIteams = this.checkOutProduct.length
        console.log('all product here', res);
      }
      else {
        console.log('all product not here here',);
        this.router.navigate(['/viewcart'])
      }
    })
  }


  getTotalAmout() {
    return this.cartService.getTotal()
  }

  // loadStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     var s = window.document.createElement("script");
  //     s.id = "stripe-script";
  //     s.type = "text/javascript";
  //     s.src = "https://checkout.stripe.com/checkout.js";
  //     s.onload = () => {
  //       this.handler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51N551LSH6SbNfJrzYHzHaUKeXkZwu7SsCcHajSArReqMBD4Y9qOVBW6ImKrxcj0e6Z88j6Bb09dejY6uExVnYr1g006sBu2WYo',//Need to change
  //         locale: 'auto',
  //         token: function () {

  //         }
  //       });
  //     }
  //     window.document.body.appendChild(s);
  //   }
  // }

  // createRegForm(){
  //   this.checkoutForm = new FormGroup({
  //     items: new FormArray([])
  //   });
  // }

  createAddress(): FormGroup {
    return this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['India'],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required],
      amount: [0]
    })
  }

  removeAddress(index) {
    // this.checkoutForm.removeAt(index)
    let remove = this.checkoutForm.get("items") as FormArray
    remove.removeAt(index)
  }

  addAddress() {
    this.checkoutForm.get("items").push(this.createAddress()) as FormArray
    // this.items.push(this.createAddress())
  }

  submit() {
    
    console.log(this.checkoutForm.value);
    this.addressPickup.push(this.checkoutForm.value)
    // console.log('addressPickup', this.addressPickup);
    localStorage.setItem('address',JSON.stringify(this.addressSave.push(this.checkoutForm.value)))

  }
 
  onSubmit(formData: any) {
    console.log('data');

    if (this.checkoutForm.invalid) {
      return;
    }

    let allItems = [];
    for (let i = 0; i < this.checkOutProduct.length; i++) {
      allItems[i] = {
        ProductId: this.checkOutProduct[i].product.id,
        Quantity: this.checkOutProduct[i].quantity,
        Size: '',
        Color: '',
        Price: this.checkOutProduct[i].product.price,
        Discount: ''
      }
    }

    let obj = {
      id: 0,
      firstname: formData.value.firstname,
      lastname: formData.value.lastname,
      phone: formData.value.phone,
      email: formData.value.email,
      address: formData.value.address,
      country: formData.value.country,
      town: formData.value.town,
      state: formData.value.state,
      postalcode: formData.value.postalcode,
      amount: this.amount,
      shippingAmount: 40,
      paymentTypeId: 1,
      items: allItems,
      payment: null
    }


    let saveData = (obj) => this.httpService.post("http://sahosoftweb.com/api/" + "PaymentMaster/Save/", obj).subscribe(objdata => {
      if (objdata.isSuccess) {
        let orderDetails = {
          product: this.checkOutProduct,
          shippingDetails: obj,
          orderId: objdata.data.orderId,
          totalAmount: this.totalAmount,
          expectedDate: objdata.data.expecteddate,
          paymentDate: objdata.data.paymentDate
        };
        this.orderService.createOrder(orderDetails);
        this.checkoutForm.reset();
      } else {
        // this._toastr.error(objdata.errors[0], "Payment Master");
        console.log('Error',);

      }
    });



    this.raz = new this._auth.nativeWindow['Razorpay'](this.options);
    console.log(this.options.amount)
    console.log(this.options.id)
    this.raz.open()
    this.router.navigate(['/success'])


    // For Payment here
    // var handler = (<any>window).StripeCheckout.configure({
    //   key: 'pk_test_IMfLDyTjBvG9AK7MNtHntboG00XQFgMOiE', //Need to change
    //   locale: 'auto',
    //   token: function (token: any) {
    //     let objPayment = { tokenId: token.id, amount: obj.amount + obj.shippingAmount, description: "Shopping with sahosoft mall-18-Dec-2021" };
    //     console.log(token);
    //     obj.payment = objPayment;
    //     saveData(obj);
    //   }
    // });

    // handler.open({
    //   name: 'TezMart',
    //   description: 'ecommerce',
    //   country: 'INDIA',
    //   currency: 'INR',
    //   amount: this.totalAmount * 100
    // });
  }

  public options: any = {
    id: '10',
    key: 'rzp_test_MDzI3aqkzUTbOH', // add razorpay key here
    name: 'E-commerce',
    description: 'Shopping',
    amount: 40000, // razorpay takes amount in paisa
    prefill: {
      name: 'E-commerce',
      email: 'priyaranjanved@gmail.com', // add your email id
      contact: "411111111"
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    // handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails

        })
      })
    }
  };


}
