import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-slider',
  templateUrl: './set-slider.component.html',
  styleUrls: ['./set-slider.component.scss']
})
export class SetSliderComponent implements OnInit {

  Setbanner1: string = 'assets/images/banner-4.jpg';
  Setbanner2: string = 'assets/images/banner.jpg';
  Setbanner3: string = 'assets/images/banner-10.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
