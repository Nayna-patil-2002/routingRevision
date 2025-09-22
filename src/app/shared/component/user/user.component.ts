import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Iuser } from '../../model/userArr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   userArr:Array<Iuser>=[]
  
  constructor(
    private _userService:UserService
  ) { }

  ngOnInit(): void {
   this.getUserArr()
  }

  getUserArr(){
   this._userService.fetchAlluser()
     .subscribe({
      next:(data)=>{
        this.userArr=data
        console.log(data)
        console.log(this.userArr);
        
      },
      error:err=>{
        console.log(err)
      }
     })
  }

}
