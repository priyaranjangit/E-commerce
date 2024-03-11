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

  findMatchingItemsWithIndex(arr1: any[], arr2: any[]): { item: any, index1: number, index2: number }[] {
    const matchingItemsWithIndex = [];
    arr1.forEach((item, index) => {
      const matchingIndex = arr2.indexOf(item);
      if (matchingIndex !== -1) {
        matchingItemsWithIndex.push({ item: item, index1: index, index2: matchingIndex });
      }
    });
    return matchingItemsWithIndex;
  }
}
