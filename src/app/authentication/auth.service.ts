import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string = "";
  private currentUser = new BehaviorSubject<any>(null); // For Token Use
  private loggedIn = new BehaviorSubject<boolean>(false);
  

  get CurrentUser() {
    return this.currentUser.asObservable();
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  authLogin(res: any) {
    if (res.id === 0) {
      this.message = "Please enter valid username and password !!";
      localStorage.clear();
      this.currentUser.next(null);
      this.loggedIn.next(false);
    } else {
      this.message = "";
      localStorage.setItem("userDetails", JSON.stringify(res));
      this.currentUser.next(res);

      console.log('inAuthservice',this.currentUser);
      
      this.loggedIn.next(true);
      this.router.navigate(['']);
    }
  }

  getMessage() : string {
    return this.message;
  }

  logout(){
    // localStorage.clear();
    localStorage.removeItem("userDetails")
    this.currentUser.next(null);
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }

  // getItems(): Observable<any> {
  //   return of(this.productsItems);

  // }
  
  getUserData(): Observable<any> {
    return of(JSON.parse(localStorage.getItem("userDetails")));

  }
}
