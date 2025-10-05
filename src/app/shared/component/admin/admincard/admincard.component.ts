import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Iadmin } from 'src/app/shared/model/adminArr';
import { AdminService } from 'src/app/shared/service/admin.service';
import { SnackabrService } from 'src/app/shared/service/snackabr.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-admincard',
  templateUrl: './admincard.component.html',
  styleUrls: ['./admincard.component.scss']
})
export class AdmincardComponent implements OnInit {
   adminDetails!:Iadmin
   adminId!:string
  constructor(
    private _activateroute:ActivatedRoute,
    private _router:Router,
    private _adminservice:AdminService,
    private _snackbar:SnackabrService,
    private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
    this._activateroute.params
     .subscribe((param:Params)=>{
      this.adminId=param['id']
      console.log(this.adminId)
       if(this.adminId){
      this._adminservice.fetchDetails(this.adminId)
        .subscribe({
          next:(data)=>{
            this.adminDetails=data
            console.log(this.adminDetails)
          },
          error:err=>{
            console.log(err)
          }
        })
     }
     })
    

  }

  onRemove(){

    const dilogconfig:MatDialogConfig=new MatDialogConfig();
    dilogconfig.data=`Are you sure you want to remove?`
    dilogconfig.disableClose=true;

    let matdialogRef=this._matDialog.open(GetconfirmComponent, dilogconfig)
    matdialogRef.afterClosed()
    .subscribe(res=>{
      if(res){
        this._adminservice.removeAdmin(this.adminDetails)
    this._snackbar.openSnackbar(`This ${this.adminDetails.name} removed successfully.`)
    this._router.navigate(['admin'])
      }
    })
    
  
  }

}



