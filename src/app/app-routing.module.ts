import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycartComponent } from './component/mycart/mycart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { ProfileDetailsComponent } from './component/profile-details/profile-details.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { OrderComponent } from './component/order/order.component';
import { PleaseLoginComponent } from './component/please-login/please-login.component';
import { LoginComponent } from './component/login/login.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { OrderPlacedComponent } from './component/order-placed/order-placed.component';

import { authGuard } from './auth/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  { path: 'mycart',   component: MycartComponent ,canActivate: [authGuard] },
  { path: 'wishlist', component: WishlistComponent  },
  { path: 'order',    component: OrderComponent  },
  {
    path: 'book',
    component: BookdetailsComponent
  },
  {
    path:'profile',
    component:ProfileDetailsComponent},
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path:'wishlist-login',
    component:PleaseLoginComponent
  },
  {
    path:'login-signup',
    component:LoginSignupComponent
  },
  { path: 'wishlist-login', component: PleaseLoginComponent },
  { path: 'order-placed', component: OrderPlacedComponent},
  // { path : 'please-login', component: PleaseLoginComponent},
  {
    path:'login-signup', component : LoginSignupComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
