import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { MaterialModule } from './moudle/material/material.module';
import { BookwidgetComponent } from './component/bookwidget/bookwidget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { OrderComponent } from './component/order/order.component';
import {MatIconModule} from '@angular/material/icon';
import { ProfileDetailsComponent } from './component/profile-details/profile-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MycartComponent,
    ForgotPasswordComponent,
    FooterComponent,
    DashboardComponent,
    BookdetailsComponent,
    BookwidgetComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    WishlistComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
