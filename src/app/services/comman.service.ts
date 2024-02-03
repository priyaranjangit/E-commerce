import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor(private http : HttpClient) { }

private allProduct():Observable<any>{
  return  this.http.get('https://fakestoreapi.com/products/')


}

  getProduct():Observable<any>{
    return this.allProduct()

  }

  singleProduct(id):Observable<any>{
    // debugger
    return this.getProduct().pipe(map(item=>item.find(p=>p.id==id)))
  }

  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    let httpHeader = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let option = {
      headers: httpHeader
    };

    return this.http.post(url, body, option);
  }
}
