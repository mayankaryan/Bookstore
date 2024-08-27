import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycartComponent } from './component/mycart/mycart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { OrderComponent } from './component/order/order.component';

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
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
