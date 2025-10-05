import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UserComponent } from './shared/component/user/user.component';
import { UserFormComponent } from './shared/component/user/user-form/user-form.component';
import { UserDeatilsComponent } from './shared/component/user/user-deatils/user-deatils.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './shared/component/product-dashboard/product-card/product-card.component';
import { ProductformComponent } from './shared/component/product-dashboard/productform/productform.component';
import { AdminComponent } from './shared/component/admin/admin.component';
import { AdminFormComponent } from './shared/component/admin/admin-form/admin-form.component';
import { AdmincardComponent } from './shared/component/admin/admincard/admincard.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { AuthGuard } from './shared/service/auth.gaurd';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { UserRoleGuard } from './shared/service/user-role.guard';
import { CanDeactivateGuard } from './shared/service/can-deactivate.guard';
import { ProductresolverResolver } from './shared/service/productresolver.resolver';
import { ProductDeatilaresolverResolver } from './shared/service/product-deatilaresolver.resolver';

const routes: Routes = [
//   { 
//   path: '', 
//   component: AuthComponent,
    
//  },
//  {
//   path:"page-not-found",
//   component:PageNotFoundComponent,
//   data:{
//     msg:`page not found msg using static data!!`
//   }
//  },
//  {
//   path:'**',
//   redirectTo:`page-not-found`
//  },
  // { 
  //   path: '', 
  //   redirectTo: 'home',
  //    pathMatch: 'full' 
  //   },

   { 
  path: '', 
  component: AuthComponent,
  //  pathMatch:'full' 
 },

 { 
  path: 'home', 
  component: HomeComponent,
   data:{
    userRoles:['admin', "superAdmin", "buyer"]
   }
 },
 { 
  path: 'user', 
  component: UserComponent,
   canActivate:[AuthGuard, UserRoleGuard],
   
   data:{
    userRoles:["admin", "superAdmin"]
   },
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
      component:UserFormComponent,
      canDeactivate:[CanDeactivateGuard],
    }
  ]
 },
 { 
  path: 'product', 
  component: ProductDashboardComponent,
  canActivate:[AuthGuard, UserRoleGuard],
   data:{
    userRoles:["admin", "superAdmin", "buyer"]
   },
   resolve:{
    product:ProductresolverResolver
   },
  children : [
    {
      path : 'addProduct',
      component : ProductformComponent
    },
        {
      path:":pId",
      component:ProductCardComponent,
      resolve:{
        product:ProductDeatilaresolverResolver
      }
    },
    {
      path:":pId/editproduct",
      component:ProductformComponent,
      canDeactivate:[CanDeactivateGuard]
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
 
  {
    path:"admin",
    component:AdminComponent,
     canActivate:[AuthGuard, UserRoleGuard],
    data:{
      userRoles:[ "superAdmin"]
   },
    children:[
      {
        path:"addAdmin",
        component:AdminFormComponent
      },
      {
        path:":id",
        component:AdmincardComponent
      },
      {
        path:':id/editAdmin',
        component:AdminFormComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
