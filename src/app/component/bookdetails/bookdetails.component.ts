import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent {
  feedbackList:any[]=[];
  constructor(private bookservice:BookService) { 
    this.bookservice.getFeedBack().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.feedbackList=res.result;
      },error:(err:any)=>{
        console.log(err);
      }
    });
  }

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i);
  }
  getRatingArray2(rating: number): number[] {
    return Array(5-rating).fill(0).map((x, i) => i);
  }
}
