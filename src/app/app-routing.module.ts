import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },{
    path: 'book',
    component: BookdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
