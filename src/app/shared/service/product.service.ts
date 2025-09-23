import { Injectable } from '@angular/core';
import { Iproduct } from '../model/productArr';
import { productsArr } from '../const/productArr';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   productarr:Array<Iproduct>=productsArr
  constructor() { }

  fetchproduct():Observable<Iproduct[]>{
    return of(this.productarr) 
  }

  fetchAllproduct(pId:string):Observable<Iproduct>{
    let productdatails=this. productarr.find(product=>product.pId===pId) as Iproduct
          return of(productdatails)
  }

  addproduct(Obj:Iproduct){
    this.productarr.push(Obj)
  }

  removeproduct(Obj:Iproduct){
    let getIndex=this.productarr.findIndex(p=>p.pId===Obj.pId)
    this.productarr.splice(getIndex, 1)
  }

  updateproduct(Obj:Iproduct){
    let getIndex=this.productarr.findIndex(p=>p.pId===Obj.pId)
    this.productarr[getIndex]=Obj
  }
}
