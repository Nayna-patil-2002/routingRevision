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
export class ProductresolverResolver implements Resolve<Iproduct[]> {
  constructor(
    private _productSrrvice:ProductService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct[]> {
   return this._productSrrvice.fetchproduct()
  }
}
