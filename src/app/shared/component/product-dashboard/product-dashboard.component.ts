import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/productArr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
   productArr:Array<Iproduct>=[]
  constructor(
    private _productService:ProductService,
    private _router:ActivatedRoute
  ) { 
    console.log(this._router)
    this.productArr=this._router.snapshot.data['product']
  }

  ngOnInit(): void {
    // this.getproduct()
  }

  getproduct(){
    this._productService.fetchproduct()
        .subscribe({
          next:(data)=>{
            this.productArr=data
            console.log(this.productArr)
          },
          error:err=>{
            console.log(err)
          }
        })
  }

}

