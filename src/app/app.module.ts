import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
<<<<<<< HEAD
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './moudle/material/material.module';
import { BookwidgetComponent } from './component/bookwidget/bookwidget.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> d6c2f2b1ea7966c09f389dfe047562ab619c56d8

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    DashboardComponent,
    BookdetailsComponent,
    BookwidgetComponent
=======
    ForgotPasswordComponent
>>>>>>> d6c2f2b1ea7966c09f389dfe047562ab619c56d8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MaterialModule,
    HttpClientModule
    

=======
    ReactiveFormsModule
>>>>>>> d6c2f2b1ea7966c09f389dfe047562ab619c56d8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
