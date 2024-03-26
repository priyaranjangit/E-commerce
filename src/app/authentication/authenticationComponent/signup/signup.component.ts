import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
// import { Component,  } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('container') containerRef!: ElementRef;
  
  container = document.getElementById('container')
  constructor() { }

  toggle(){
   
  }

  ngOnInit(): void {

  }


}
