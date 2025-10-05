import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  private _authservice=inject(AuthService)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let arrofUserRole:Array<string>=route.data['userRoles']
      let logedInuser:string=this._authservice.getUserRole()!
     if(arrofUserRole.includes(logedInuser)){
      return true
     }else{
      return false
     }
  }
  
}
