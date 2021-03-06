import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Array<Product>=[];

  productRef = new FormGroup({
    pid:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    url:new FormControl()
  });
  storeMsg:string="";
  deleteMsg:string="";
  flag : boolean = false;
  pid:number=0;
  price:number=0;
  updateMsg:string= "";

  constructor(public prodSer:ProductService) { } // DI for Service class

  // life cycle of component. it will call only once 
  ngOnInit(): void {
    this.retetriveAllProduct();
  }

  retetriveAllProduct() {
    this.prodSer.loadAllProductDetals().subscribe(result=>this.product=result,
      error=>console.log(error));
  }

  storeProductInfo(){
    //console.log("event fired")
    let produt = this.productRef.value;   // it provide the records in json format. 
   // console.log(produt);
   this.prodSer.storeProductDetails(produt).subscribe(result=>this.storeMsg=result.msg,
   error=>console.log(error),()=> this.retetriveAllProduct());

   this.productRef.reset(); // reset of form old values. 
  }

  deleteProductInfo(pid:any){
    //console.log("Delet function called.."+pid);
    this.prodSer.deleteProductDetails(pid).
    subscribe(result=>this.deleteMsg=result.msg,
    error=>console.log(error),
    ()=>this.retetriveAllProduct());
  }

  
  updateProduct(product:any){
    //console.log(product);
    this.updateMsg="";
    this.pid = product.pid;
    this.price = product.price;
    this.flag=true;
  }

  updateProductInfo(){
    this.deleteMsg="";
    //console.log(this.pid+" "+this.price);
    let product= {"pid":this.pid,"price":this.price};
    this.prodSer.updateProductInfo(product).subscribe(
      result=>this.updateMsg = result.msg
      ,error=>console.log(error),
      ()=>this.retetriveAllProduct());
      this.flag = false;
  }
}
