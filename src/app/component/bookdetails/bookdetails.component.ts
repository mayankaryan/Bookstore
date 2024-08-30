import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { DatatransferService } from '../../service/datatransfer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent {
  feedbackList: any[] = [];
  bookdetails: any = {};
  rating: number = 0;
  commentform!: FormGroup;
  isLoading: boolean = true;
  constructor(private bookservice: BookService, private datatransferservice: DatatransferService, private fb: FormBuilder,
    private snackbarService: SnackbarService,
  ) {


  }
  ngOnInit() {

    this.datatransferservice.currentMessage.subscribe((message) => {
      this.bookdetails = message;
      localStorage.setItem('bookdetails', JSON.stringify(this.bookdetails));
      console.log("bookdetails", this.bookdetails);
    });
    this.fetchFeedback();
    this.commentform = this.fb.group({
      comment: ['']
    });

    const bookdetails = localStorage.getItem('bookdetails');
  }
  ngOnDestroy() {
    localStorage.removeItem('bookdetails');
  }

  fetchFeedback() {
    setTimeout(()=>{
      this.bookservice.getFeedBack(this.bookdetails._id).subscribe({
        next: (res: any) => {
          console.log(res);
          this.feedbackList = res.result;
        }, error: (err: any) => {
          console.log(err);
        }
      });
      this.isLoading = false;
    },1000);
  }

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i);
  }
  getRatingArray2(rating: number): number[] {
    return Array(5 - rating).fill(0).map((x, i) => i);
  }
  addtowishlist(id: any) {
    console.log("id of book:", id);
    this.bookservice.addtoWishlist(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.snackbarService.openCustomSnackBar(' added to wishlist !!', 'done');
        console.log("added to wishlist");

      }, error: (err: any) => {
        console.log(err);
      }
    });
  }

  addtocart(id: any) {
    this.bookservice.addtoCart(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.snackbarService.openCustomSnackBar(' added to cart', 'done');
        console.log("added to cart");
      }, error: (err: any) => {
        console.log(err);
      }
    });
  }



  onRatingChange(event: any) {
    this.rating = event.target.value;
    console.log('Selected rating:', this.rating);
  }
  submit_feed(id:any){
    if(this.commentform.invalid)return;
    const {comment} = this.commentform.value;
    console.log(comment,this.rating);
    this.bookservice.addfeedback(id,{comment:comment,rating:this.rating}).subscribe({
      next:(res:any)=>{
        console.log(res);
        console.log("feedback added");
      },error:(err:any)=>{
        console.log(err);
      }
    });
  }

}
