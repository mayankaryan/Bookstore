import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { ProfileDetailsComponent } from './component/profile-details/profile-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },{
    path: 'book',
    component: BookdetailsComponent
  },
  {
    path:'profile',
    component:ProfileDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
