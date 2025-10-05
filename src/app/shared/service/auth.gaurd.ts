import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
  
@Injectable({
  providedIn: 'root'   
})

export class AuthGuard implements CanActivate{
    constructor(
         private _authSrrvice:AuthService,
         private _router:Router
    ){}    
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._authSrrvice.getToken()){
        return true
      }else{
       return  this._router.createUrlTree([' '])
      }
    }
    
}