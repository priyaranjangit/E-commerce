import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugfixService {

  constructor() { 
    console.log(`this is bugfix promoted`);
    
  }
  
}
