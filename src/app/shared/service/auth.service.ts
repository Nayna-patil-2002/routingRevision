import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ilogin, IregisterUsers } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userLoginStatus:boolean=false
    authBaseurl:string=environment.Auth_Base_URL
  constructor(
    private _http:HttpClient
  ) { }

  login(userDetails:Ilogin):Observable<any>{
    this.userLoginStatus=true
   const Login_URL=`${this.authBaseurl}/api/auth/login`
   return this._http.post<any>(Login_URL, userDetails)
  }

  signUp(userDetails: IregisterUsers): Observable<any> {
  const signUpUrl = `${this.authBaseurl}/api/auth/register`;
  return this._http.post<any>(signUpUrl, userDetails);
}


  saveToken(token:string){
    localStorage.setItem('token', token)
  }

  saveUserRole(userRole:string){
    localStorage.setItem("userRole", userRole)
  }

  getToken(){
    return !!localStorage.getItem('token')
  }

  getUserRole(){
    return localStorage.getItem("userRole")
  }

}
