import { Component, NgZone, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomWindow } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CommanService } from 'src/app/services/comman.service';
import { PaymentService } from 'src/app/services/payment.service';
import { Location } from '@angular/common';
import $ from 'jquery';
declare var $: any;

import {
  AbstractControl,
  FormControl,
} from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkOutProduct: any[] = [];
  submitted = false;
  addressPickup = JSON.parse(localStorage.getItem('address')) || []
  addressSave: any[] = []
  totalIteams: number;
  shippingCost = 40.00
  checkoutForm: any;
  totalAmount: number;
  amount: number;
  form: any = {};
  paymentId: string;
  error: string;
  handler: any;
  providers: [PaymentService]
  formData: any;
  phonePay="assets/images/phone-pay.png"
  googlePay="assets/images/google-pay.png"
  cardPay="assets/images/credit-card.png"
  bankPay="assets/images/mobile-banking.png"
  walletPay="assets/images/purse.png"
  upiPay="assets/images/upi.png"
  // carouselInterval = 2000000; // Adjust autoplay speed in milliseconds
  carouselInterval: number ;
  constructor(private cartService: CartService,
    private httpService: CommanService,
    private router: Router, private formBuilder: FormBuilder,
    private PaymentService: PaymentService,
    private location:Location
  ) { 
    // $('#carousel-example-3').carousel({
    //   interval: 10000
    //   });
  }

  // ngDoCheck(){
  //   this.carouselInterval=500
  // }
  
  ngOnInit(): void {
    

    $(document).ready(function(){
      $('.carousel').carousel({
        interval: 500 // set the interval here if needed
      });
    });
  

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


  get f() {
    return this.checkoutForm.controls;
  }

  getTotalAmout() {
    return this.cartService.getTotal()
  }


  createAddress(): FormGroup {
    return this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50),Validators.minLength(3)]],
      country: ['India'],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required],
      amount: [0]
    })
  }

  removeAddress(index) {
    let remove = this.checkoutForm.get("items") as FormArray
    remove.removeAt(index)
  }

  addAddress() {
    this.checkoutForm.get("items").push(this.createAddress()) as FormArray
  }

  submit() {
    this.submitted=true
    if (this.form.invalid) {
      console.log('invalid');
      
      return;
    }
    console.log(this.checkoutForm.value);
    // this.addressPickup.push(this.checkoutForm.value)
    // console.log('addressPickup', this.addressPickup);
    // localStorage.setItem('address', JSON.stringify(this.addressSave.push(this.checkoutForm.value)))

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
    localStorage.setItem("cartItem", JSON.stringify(this.formData.push(obj)));
    this.formData.push(obj)
  }

  createRzpayOrder(data) {
    console.log(data);
    // call api to create order_id
    // this.payWithRazor(4);
  }

  payWithRazor() {
    const options: any = {
      key: 'rzp_test_Kl7LJ9mZjft7Lr',
      amount: 1000000, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Priyaranjan kumar', // company name or product name
      description: '',  // product description
      image: './assets/images/pyement_img.jpeg', // company logo or product image
      order_id: "", // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.PaymentService.nativeWindow.Razorpay(options);
    rzp.open();
  }

  backPage(){
    this.location.back()
  }
}
