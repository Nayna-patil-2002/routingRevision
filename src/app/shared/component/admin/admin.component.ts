import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Iadmin } from '../../model/adminArr';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  AdminArr:Array<Iadmin>=[]
  constructor(
    private _adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.getAdminArr()
  }

  getAdminArr(){
     this._adminService.fetchadmin()
       .subscribe({
        next:(data)=>{
          this.AdminArr=data
          console.log(this.AdminArr)
        },
        error:err=>{
          console.log(err)
        }
       })
  }

}
