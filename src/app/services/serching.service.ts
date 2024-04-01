import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SerchingService {

  private searchData = new BehaviorSubject<string>('');
  currentSearchData = this.searchData.asObservable();

  constructor() { }

  setSearchData(data: string) {
    this.searchData.next(data);
    // console.log('serching data',data);
    
  }
}
