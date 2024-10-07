import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-set-horz-slider',
  templateUrl: './set-horz-slider.component.html',
  styleUrls: ['./set-horz-slider.component.scss']
})
export class SetHorzSliderComponent implements  AfterViewInit  {

  setBanner_horz: string = 'assets/images/vertical-banner2.jpg';
 
  constructor() { }
  card="assets/images/atm-card.png";
  upi="assets/images/upi.png";
  purse="assets/images/purse.png";

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Initialize the vertical carousel
    $('#verticalCarousel').carousel({
      interval: 2000, // Set your desired interval
      pause: 'hover',
      ride: 'carousel',
      wrap: false // Prevents cycling through items
    });
  }
  

}
