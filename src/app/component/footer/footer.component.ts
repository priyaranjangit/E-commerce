import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';
// import 'rxjs/operator/filter';
// import { filter } from 'rxjs/operators';
// import { Observable, Subject, asapScheduler, pipe, of, from,
//   interval, merge, fromEvent ,filter} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentUrl: string = null;
  constructor(private router :Router) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // this.previousUrl = this.currentUrl;
      console.log('get current url',      this.currentUrl = event.url);

      // this.currentUrl = event.url;
      // this.urlService.setPreviousUrl(this.previousUrl);
    });
  }

}
