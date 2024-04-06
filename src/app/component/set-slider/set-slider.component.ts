import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-set-slider',
  templateUrl: './set-slider.component.html',
  styleUrls: ['./set-slider.component.scss'],
  animations: [
    trigger('rollInOut', [
      transition(':enter', [
        animate('2s', keyframes([
          style({ transform: 'rotateY(-180deg)', offset: 0 }),
          style({ transform: 'rotateY(0)', offset: 1 })
        ]))
      ]),
      transition(':leave', [
        animate('2s', keyframes([
          style({ transform: 'rotateY(0)', offset: 0 }),
          style({ transform: 'rotateY(180deg)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class SetSliderComponent implements OnInit {

  carouselItems = [
    { image: 'assets/images/banner-4.jpg', alt: 'First slide' },
    { image: 'assets/images/banner.jpg', alt: 'Second slide' },
    { image: 'assets/images/banner-10.jpg', alt: 'Third slide' }
  ];
  Setbanner1: string = 'assets/images/banner-4.jpg';
  Setbanner2: string = 'assets/images/banner.jpg';
  Setbanner3: string = 'assets/images/banner-10.jpg';
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.carousel').carousel({
        interval: 1000 // set the interval here if needed
      });
    });
  }

}
