import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/userArr';
import { SnackabrService } from 'src/app/shared/service/snackabr.service';
import { UserService } from 'src/app/shared/service/user.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.scss']
})
export class UserDeatilsComponent implements OnInit {
   userInfo!:Iuser
   userId!:string;

  constructor( 
    private _routes:ActivatedRoute,
    private _userService:UserService,
    private _router:Router,
    private _snackbar:SnackabrService,
    private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchuser()
  }

  // fetchuser(){
  //    console.log(this._routes.snapshot.params['id'])
  //    this.userId=this._routes.snapshot.params['id']
  //      if(this.userId){
  //       this._userService.fetchAlluserDetails(this.userId)
  //        .subscribe({
  //         next:data=>{
  //           this.userInfo=data
  //           console.log(data)
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //        })
  //      }
  // }

    fetchuser(){
      this._routes.params
        .subscribe((param:Params)=>{
          this.userId=param['id'];

          if(this.userId){
            this._userService.fetchAlluserDetails(this.userId)
              .subscribe({
                next:data=>{
                  this.userInfo=data
                },
                error:err=>console.log(err)
              })
          }
        })
    }
  onRemove(){
    const dialogConfig:MatDialogConfig=new MatDialogConfig();
      dialogConfig.data=`Are you sure you want to remove?`
      dialogConfig.disableClose=true;

      let matdialogRef=this._matDialog.open(GetconfirmComponent, dialogConfig)
                 matdialogRef.afterClosed()
                 .subscribe(res=>{
                  if(res){
                     this._userService.removeUser(this.userInfo)
                     this._router.navigate(['user'])
                    this._snackbar.openSnackbar(`This user with ${this.userInfo.name} is removed succesfully.`)
                  }
                 })
  }

  // let getconfirm=confirm(`Are you sure you want to remove this user?`)
  //    if(getconfirm){
  //       this._userService.removeUser(this.userInfo)

  //        this._router.navigate(['user'])
  //        this._snackbar.openSnackbar(`THis user with ${this.userInfo.name} is removed succesfully.`) 
        
  //    }


}
