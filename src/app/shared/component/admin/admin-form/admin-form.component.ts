import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadmin } from 'src/app/shared/model/adminArr';
import { Iproduct } from 'src/app/shared/model/productArr';
import { AdminService } from 'src/app/shared/service/admin.service';
import { SnackabrService } from 'src/app/shared/service/snackabr.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {
 adminForm!:FormGroup
 isIneditMode:boolean=false;
 editAdmin!:Iadmin
 adminId!:string
  constructor(
    private _activateroute:ActivatedRoute,
    private _uuid:UuidService,
    private _adminService:AdminService,
    private _router:Router,
    private _snackabr:SnackabrService
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.editDetails()
  }

  createForm(){
    this.adminForm=new FormGroup({
      name:new FormControl(null, [Validators.required]),
      email:new FormControl(null, [Validators.required]),
      contact:new FormControl(null, [Validators.required]),
      role:new FormControl(null, [Validators.required]),
      image:new FormControl(null, [Validators.required]),
    })
  }

  editDetails(){
   this.adminId= this._activateroute.snapshot.params['id']
   if(this.adminId){
    this.isIneditMode=true
   }
   this._adminService.fetchDetails(this.adminId)
       .subscribe({
        next:(data)=>{
          this.editAdmin=data
          this.adminForm.patchValue(this.editAdmin)
        },
        error:err=>{
          console.log(err)
        }
       })

  }

  onAddadmin(){
   if(this.adminForm.valid){
    let adminObj={...this.adminForm.value, id:this._uuid.Uuid()}
    console.log(adminObj)
    this._adminService.AddAdmin(adminObj)
    this.adminForm.reset()
    this._router.navigate(['admin'])
    this._snackabr.openSnackbar(`This admin  added successfully.`)

   }
  }
   
  onUpdate(){
    if(this.adminForm.valid){
      let updatedObj={...this.adminForm.value, id:this.adminId}
      console.log(updatedObj)
      this._adminService.updatedeatils(updatedObj)
      this.adminForm.reset()
      this._router.navigate(['admin'])
      this._snackabr.openSnackbar(`This ${updatedObj.name} updated succesfully.`)
    }
  }

  

}
