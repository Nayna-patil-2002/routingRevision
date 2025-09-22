import { Injectable } from '@angular/core';
import { Iuser } from '../model/userArr';
import { Observable, of } from 'rxjs';
import { userArr } from '../const/userArr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userobj:Array<Iuser>= userArr
  constructor() { }

  fetchAlluser():Observable<Iuser[]>{
    return of(this.userobj)
  }

  fetchAlluserDetails(id:string):Observable<Iuser>{
      let userdetails=this.userobj.find(user=>user.id===id) as Iuser
      return of(userdetails)
  }

  adduser(userObj:Iuser){
    this.userobj.push(userObj)
  }

  updateUser(obj:Iuser){
    let getIndex=this.userobj.findIndex(user=>user.id===obj.id);
    this.userobj[getIndex] = obj;
  }

  removeUser(Obj:Iuser){
       let getIndex=this.userobj.findIndex(user=>user.id===Obj.id);
       this.userobj.splice(getIndex, 1)
  }
}
