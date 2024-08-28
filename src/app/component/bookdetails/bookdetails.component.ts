import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { DatatransferService } from '../../service/datatransfer.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent {
  feedbackList:any[]=[];
  bookdetails:any={};
  constructor(private bookservice:BookService,private datatransferservice:DatatransferService) {

   
  }
  ngOnInit(){
   
    this.datatransferservice.currentMessage.subscribe((message) => {
      this.bookdetails = message;
      console.log("bookdetails",this.bookdetails);
  });
  this.bookservice.getFeedBack(this.bookdetails._id).subscribe({
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
