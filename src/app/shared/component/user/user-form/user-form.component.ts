import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/userArr';
import { UuidService } from 'src/app/shared/service/uuid.service';
import { UserDeatilsComponent } from '../user-deatils/user-deatils.component';
import { UserService } from 'src/app/shared/service/user.service';
import { SnackabrService } from 'src/app/shared/service/snackabr.service';
import { Icandeactivate } from 'src/app/shared/model/candeactivet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, Icandeactivate {
     isInEdit:boolean=false;
     userId!:string
     userForm!:FormGroup
     edituser!:Iuser
  constructor(
    private _routes :ActivatedRoute,
    private _uuidservice:UuidService,
    private _userService:UserService,
    private _router:Router,
    private _snackbar:SnackabrService
  ) { }

  ngOnInit(): void {
    // this.userId=this._routes.snapshot.params['id']
    // if(this.userId){
    //   this.isInEdit=true
    // }

    this.createForm()
    this.userIdGet()
  }

   userIdGet(){
     this.userId=this._routes.snapshot.params['id']
    if(this.userId){
      this.isInEdit=true
    }
    this._userService.fetchAlluserDetails(this.userId)
      .subscribe({
        next:data=>{
          this.edituser=data
          this.userForm.patchValue(this.edituser)
        },
        error:err=>{
          console.log(err)
        }
      })

   }

  createForm(){
    this.userForm=new FormGroup({
      name:new FormControl(null, [Validators.required]),
      email:new FormControl(null, [Validators.required]),
      age:new FormControl(null, [Validators.required]),
      image:new FormControl(null, [Validators.required])
    })
  }

  onAdduser(){
    if(this.userForm.valid){
      let Obj:Iuser={...this.userForm.value, id:this._uuidservice.Uuid()}
      console.log(Obj)
      this._userService.adduser(Obj)
      this.userForm.reset()
      this._router.navigate(['user'])
      this._snackbar.openSnackbar(`This user ${Obj.name} added succesfully.`)
    }
  }

  onUpdate(){
    if(this.userForm.valid){
      let updstaeUser={...this.userForm.value, id:this.userId}
      console.log(updstaeUser);
      this._userService.updateUser(updstaeUser)
      this.isInEdit=false
      this._router.navigate(['user'])
       this._snackbar.openSnackbar(`This user ${updstaeUser.name} updated succesfully.`)
    }
  }

  canDeactivate(){
    if(this.userForm.dirty && this.isInEdit){
      let getConfirm=confirm('Are you sure want to discard these changes?')
      return getConfirm
    }else{
      return true
    }
  }

}
