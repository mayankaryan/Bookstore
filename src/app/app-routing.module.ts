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
import { OrderPlacedComponent } from './component/order-placed/order-placed.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  { path: 'mycart',   component: MycartComponent },
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
  { path: 'wishlist-login', component: PleaseLoginComponent },
  { path: 'order-placed', component: OrderPlacedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
