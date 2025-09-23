import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/productArr';
import { Iuser } from 'src/app/shared/model/userArr';
import { ProductService } from 'src/app/shared/service/product.service';
import { UserService } from 'src/app/shared/service/user.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
    product!:Iproduct
    productId!:string
    constructor(
    private _productservice:ProductService,
    private _activateRoute:ActivatedRoute,
    private _router:Router,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    
   this.getproductDeatils()

  }

  getproductDeatils(){
     console.log(this._activateRoute.snapshot.params['pId'])
    this.productId=this._activateRoute.snapshot.params['pId']
    if(this.productId){
      this._productservice.fetchAllproduct(this.productId)
       .subscribe({
        next:(data)=>{
          this.product=data
        },
        error:err=>{
          console.log(err)
        }
       })


    }
  }

  onRemove(){
    const DialogConfig : MatDialogConfig = new MatDialogConfig();
      DialogConfig.data=`Are you sure you want to remove?`;
      DialogConfig.disableClose=true;

      
   let matdialogRef = this._matDialog.open(GetconfirmComponent, DialogConfig)
       matdialogRef.afterClosed()
           .subscribe(res=>{
            if(res){
                this._productservice.removeproduct(this.product)
                  this._router.navigate(['product'])

            }
           })
  }

  //  this._productservice.removeproduct(this.product)
  //    this._router.navigate(['product'])

 

}
