import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UserComponent } from './shared/component/user/user.component';
import { UserFormComponent } from './shared/component/user/user-form/user-form.component';
import { UserDeatilsComponent } from './shared/component/user/user-deatils/user-deatils.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './shared/component/product-dashboard/product-card/product-card.component';
import { ProductformComponent } from './shared/component/product-dashboard/productform/productform.component';

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
  component: UserComponent,
  children:[
    {
      path:'adduser',
      component:UserFormComponent
    },
    {
      path:":id",
      component:UserDeatilsComponent
    },
    {
      path:":id/edituser",
      component:UserFormComponent
    }
  ]
 },
 { 
  path: 'product', 
  component: ProductDashboardComponent,
  children : [
    {
      path : 'addProduct',
      component : ProductformComponent
    },
        {
      path:":pId",
      component:ProductCardComponent
    },
    {
      path:":pId/editproduct",
      component:ProductformComponent
    },
  ]
 },
//  {
//   path:"product/addProduct",
//   component:ProductformComponent
//  },
//  {
//   path:"product/:pId",
//   component:ProductCardComponent
//  },
//  {
//   path:"product/:pId/editproduct",
//   component:ProductformComponent
//  },
 
//  {
//   path:"users/adduser",
//   component:UserFormComponent
//  },
//  {
//   path:"user/:id",
//   component:UserDeatilsComponent
//  },
//  {
//   path:"user/:id/edituser",
//   component:UserFormComponent
//  },
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
