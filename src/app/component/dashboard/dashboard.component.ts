import { Component } from '@angular/core';
import { HttpService } from '../../service/http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  booklist:any[]=[];
  selectedSortOption: string = 'relevance'; 
  constructor(private httpservice:HttpService) { 
    this.httpservice.GetApiCall("bookstore_user/get/book").subscribe({
      next:(res:any)=>{
        this.booklist=res.result;
        console.log(res.result[0]);
      },error:(err:any)=>{
        console.log(err);
      }
    })
  }

  length(): number {
    return this.booklist.length;
  }
}
