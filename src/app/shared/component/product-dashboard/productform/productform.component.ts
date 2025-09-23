import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/productArr';
import { ProductService } from 'src/app/shared/service/product.service';
import { SnackabrService } from 'src/app/shared/service/snackabr.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  isInEdit:boolean=false;
  productId!:string;
  productForm!:FormGroup;
  editProduct!:Iproduct;
  constructor(
    private _activateroute:ActivatedRoute,
    private _productSrrvice:ProductService,
    private _uuuid:UuidService,
    private _router:Router,
    private _snackabr:SnackabrService
  ) { }

  ngOnInit(): void {
    this.createForm()
   this.editDetails()
  }
  editDetails(){
    this. productId=this._activateroute.snapshot.params['pId']
    if(this. productId){
      this.isInEdit=true
    }

    this._productSrrvice.fetchAllproduct(this.productId)
       .subscribe({
        next:data=>{
          this.editProduct=data
          this.productForm.patchValue(this.editProduct)

        },
        error:err=>{
          console.log(err)
        }
       })
  }

  createForm(){
    this.productForm=new FormGroup({
      productName:new FormControl(null, [Validators.required]),
      pStatus:new FormControl(null, [Validators.required]),
       productDetails:new FormControl(null, [Validators.required]),
        price:new FormControl(null, [Validators.required]),
        image:new FormControl(null, [Validators.required]),
    })
  }

  onAddprod(){
    if(this.productForm.valid){
     let Obj={...this.productForm.value, pId:this._uuuid.Uuid()}
     console.log( Obj)
     this._productSrrvice.addproduct( Obj)
     
      this.productForm.reset()
       this._router.navigate(['product'])
       this._snackabr.openSnackbar(`This ${Obj.productName} is added succesfully.`)
    }
  }

  onUpdate(){
    if(this.productForm.valid){
      let updateObj={...this.productForm.value, pId:this.productId}
       console.log(updateObj)
       this._productSrrvice.updateproduct(updateObj)
       this._router.navigate(['product'])
       this._snackabr.openSnackbar(`This ${updateObj.productName} is updated successfully.`)
    }
  }

}
