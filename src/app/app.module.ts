import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './shared/component/user/user.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { ProductComponent } from './shared/component/product/product.component';
import { UserDeatilsComponent } from './shared/component/user/user-deatils/user-deatils.component';
import { UserFormComponent } from './shared/component/user/user-form/user-form.component';
import { ProductDetailsComponent } from './shared/component/product/product-details/product-details.component';
import { ProductFormComponent } from './shared/component/product/product-form/product-form.component';
import { ProductDashboardComponent } from './shared/component/product/product-dashboard/product-dashboard.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    ProductComponent,
    UserDeatilsComponent,
    UserFormComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    ProductDashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
     BrowserAnimationsModule,
    
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
