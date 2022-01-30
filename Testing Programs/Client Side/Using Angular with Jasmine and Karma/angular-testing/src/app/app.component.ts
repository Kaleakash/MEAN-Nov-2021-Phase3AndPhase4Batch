import { Component } from '@angular/core';
import { Employee } from './employee';
import { FakeService } from './fake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  id:number =100;
  name:string ="Raj Deep";
  age:number =21;
  result:boolean = true;

  num:Array<number>=[10,20,30,40,50];
  names:Array<string>=["Ravi","Ajay","Vijay","Mahesh"];
  emp:Employee=new Employee(100,"Raju",34);
  listOfEmp:Array<Employee>=[
    {id:1,"name":"Ravi",age:21},
    {id:2,"name":"Raju",age:24},
    {id:3,"name":"Ramesh",age:26}
  ]  
  serMsg:string="";
  constructor(public ser:FakeService){}   // DI for Service class 

  callServiceFunction():void {
        this.serMsg=this.ser.sayHello();
  }
  
}
