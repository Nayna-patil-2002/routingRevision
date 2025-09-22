import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UserComponent } from './shared/component/user/user.component';
import { ProductComponent } from './shared/component/product/product.component';
import { UserFormComponent } from './shared/component/user/user-form/user-form.component';
import { UserDeatilsComponent } from './shared/component/user/user-deatils/user-deatils.component';

const routes: Routes = [
  { 
  path: ' ', 
  component: HomeComponent
 },
  { 
    path: '', 
    redirectTo: 'home',
     pathMatch: 'full' 
    },

 { 
  path: 'home', 
  component: HomeComponent
 },
 { 
  path: 'user', 
  component: UserComponent
 },
 {
  path:"users/adduser",
  component:UserFormComponent
 },
 {
  path:"user/:id",
  component:UserDeatilsComponent
 },
 {
  path:"user/:id/edituser",
  component:UserFormComponent
 },
 { 
  path: 'product', 
  component: ProductComponent
 },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
