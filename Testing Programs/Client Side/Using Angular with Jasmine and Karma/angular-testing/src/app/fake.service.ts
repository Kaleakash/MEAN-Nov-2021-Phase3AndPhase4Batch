import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fake } from './Fake';

@Injectable({
  providedIn: 'root'// register in app.module.ts in provider attribute 
})
export class FakeService {

  constructor(public http:HttpClient) { }

  sayHello():string {
    return "Welcome to Service code";
  }

  loadData():Observable<Fake[]> {
    return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos")
  }
}
