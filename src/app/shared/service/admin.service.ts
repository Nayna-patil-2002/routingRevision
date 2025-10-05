import { Injectable } from '@angular/core';
import { admins } from '../const/adminArr';
import { Iadmin } from '../model/adminArr';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 adminArr:Array<Iadmin>=admins
  constructor() { }

  fetchadmin():Observable<Iadmin[]>{
    return of(this.adminArr) 
  }

  fetchDetails(id:string):Observable<Iadmin>{
    let adminDetails=this.adminArr.find(admin=>admin.id===id)as  Iadmin

    return of(adminDetails)
  }

  AddAdmin(obj:Iadmin){
     this.adminArr.push(obj)
  }

  updatedeatils(Obj:Iadmin){
    let getIndex=this.adminArr.findIndex(a=>a.id===Obj.id)
    this.adminArr[getIndex]=Obj
  }

  removeAdmin(Obj:Iadmin){
    let getIndex=this.adminArr.findIndex(a=>a.id===Obj.id)
    this.adminArr.splice(getIndex, 1)
    
  }
}
