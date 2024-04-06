import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {
pagenotFound="assets/images/page-not-found.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
