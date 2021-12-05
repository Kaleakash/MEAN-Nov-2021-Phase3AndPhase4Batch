import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
providedIn: 'root'  // it is equal to provider attriute in app.module.ts file 
})
export class ProductService {

  constructor(public http:HttpClient) { } // DI for Http

  // loadAllProductDetals() {
  //   this.http.get("http://localhost:9090/getAllProductDetails").
  //   subscribe(result=>console.log(result),
  //   error=>console.log(error),()=>console.log("completed"));
  // }

  loadAllProductDetals():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/getAllProductDetails")
  }


  storeProductDetails(product:Product):Observable<any>{
    return this.http.post("http://localhost:9090/addProduct",product)
  }
}
