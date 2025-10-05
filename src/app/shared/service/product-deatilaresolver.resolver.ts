import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../model/productArr';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDeatilaresolverResolver implements Resolve<Iproduct> {
  constructor(
    private _productService:ProductService
  ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct> {

    let productId=route.paramMap.get('pId')!
     return this._productService.fetchAllproduct(productId) 
  }
}
