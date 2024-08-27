import { Component } from '@angular/core';
import { HttpService } from '../../service/http/http.service';
import { Input } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  booklist:any[]=[];
  @Input() searchText: string = '';
  filteredBookList:any[]=[];
  selectedSortOption: string = 'relevance'; 
  constructor(private httpservice:HttpService,private dataservice:DataService) { 
    this.httpservice.GetApiCall("bookstore_user/get/book").subscribe({
      next:(res:any)=>{
        this.booklist=res.result;
        this.filteredBookList=this.booklist;
        console.log(res.result[0]);
      },error:(err:any)=>{
        console.log(err);
      }
    })
    this.dataservice.currentMessage.subscribe((message) => {
      this.searchText =message ;
});
  }

  length(): number {
    return this.booklist.length;
  }

 filter(event:any){
    this.selectedSortOption=event;
    this.filteredBookList = this.booklist;
    this.filteredBookList.sort((a: any, b: any) => {
      return a[event] - b[event];
    });
 }
}
