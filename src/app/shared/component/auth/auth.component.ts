import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { SnackabrService } from '../../service/snackabr.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  allReadyHasAc: boolean = false;
  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  constructor(
    private _authService:AuthService,
    private _router:Router,
    private _snackbar:SnackabrService
  ){}

  ngOnInit(): void {
    this.createLoginForm();
    this.createSignUpForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  createSignUpForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
    });
  }

   onLogin(){
     if(this.loginForm.valid){
      let obj=this.loginForm.value
        this._authService.login(obj)
          .subscribe({
            next:res=>{
              console.log(res)
             console.log(this._authService.saveToken(res.token)) 
             console.log( this._authService.saveUserRole(res.userRole))
              this._snackbar.openSnackbar(res.message)
              this._router.navigate(['home'])
            },
            error:err=>{
              console.log(err)
            }
          })
     }
  }

  signUp() {
    console.log(this.signUpForm.value);

    if(this.signUpForm.valid){
      let val=this.signUpForm.value;
      console.log(val)
      this._authService.signUp(val)
          .subscribe({
            next:res=>{
              console.log(res)
              this.signUpForm.reset()
              this._snackbar.openSnackbar(res.message)
            },
            error:err=>{
             this._snackbar.openSnackbar(err.error.message)
            }
          })
    }
  }

  
}
