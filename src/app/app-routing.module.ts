import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycartComponent } from './component/mycart/mycart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  { 
    path: 'mycart', 
    component: MycartComponent
  },
  {
    path: 'book',
    component: BookdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
