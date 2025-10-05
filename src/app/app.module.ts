import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './shared/component/user/user.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

import { UserDeatilsComponent } from './shared/component/user/user-deatils/user-deatils.component';
import { UserFormComponent } from './shared/component/user/user-form/user-form.component';


import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './shared/component/product-dashboard/product-card/product-card.component';
import { ProductformComponent } from './shared/component/product-dashboard/productform/productform.component';
import { GetconfirmComponent } from './shared/component/getconfirm/getconfirm.component';
import { CricketerComponent } from './shared/component/cricketer/cricketer.component';
import { CricketerCardComponent } from './shared/component/cricketer/cricketer-card/cricketer-card.component';
import { CrickterFormComponent } from './shared/component/cricketer/crickter-form/crickter-form.component';
import { AdminComponent } from './shared/component/admin/admin.component';
import { AdmincardComponent } from './shared/component/admin/admincard/admincard.component';
import { AdminFormComponent } from './shared/component/admin/admin-form/admin-form.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    
    UserDeatilsComponent,
    UserFormComponent,
   
    HomeComponent,
        ProductDashboardComponent,
        ProductCardComponent,
        ProductformComponent,
        GetconfirmComponent,
        CricketerComponent,
        CricketerCardComponent,
        CrickterFormComponent,
        AdminComponent,
        AdmincardComponent,
        AdminFormComponent,
        AuthComponent,
        PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
     BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
