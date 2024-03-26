import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-horz-slider',
  templateUrl: './set-horz-slider.component.html',
  styleUrls: ['./set-horz-slider.component.scss']
})
export class SetHorzSliderComponent implements OnInit {

  setBanner_horz: string = 'assets/images/vertical-banner2.jpg';
 
  constructor() { }

  ngOnInit(): void {
  }

}
