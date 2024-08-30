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
  bookimages:any[]=[
    '../../../assets/books/book1.png',
    '../../../assets/books/book2.png',
    '../../../assets/books/book3.png',
    '../../../assets/books/book4.png',
    '../../../assets/books/book5.png',
    '../../../assets/books/book7.png',
    '../../../assets/books/book8.png',
    '../../../assets/books/image10.png',
    '../../../assets/books/book12.png',
    '../../../assets/books/book13.png',
  ];
  booklist:any[]=[];
  @Input() searchText: string = '';
  filteredBookList:any[]=[];
  currentPage:number=1;
  itemsPerPage:number=8;
  totalPages:number=0;
  selectedSortOption: string = 'relevance'; 
  isLoading:boolean = true;
  constructor(private httpservice:HttpService,private dataservice:DataService) { 
   
  }
  ngOnInit(){
     this.fetchBook();
  }

  fetchBook(){
     setTimeout(()=>{
      this.httpservice.GetApiCall("bookstore_user/get/book").subscribe({
        next:(res:any)=>{
          this.booklist=res.result;
          console.log(this.booklist);
          this.isLoading = false;
          this.booklist = this.booklist.map((note: any) => ({
            ...note,
            book_url: this.getRandombookimg()
          }));
          this.filteredBookList=this.booklist;
          this.updatePagination();
          console.log("filtered",this.booklist);
          console.log(res.result[0]);
        },error:(err:any)=>{
          console.log(err);
        }
      })
      this.dataservice.currentMessage.subscribe((message) => {
        this.searchText =message ;
    });
    
     },1000);
  }
  
  length(): number {
    return this.booklist.length;
  }

  getRandombookimg(){
    const randomIndex = Math.floor(Math.random() * this.bookimages.length);
    return this.bookimages[randomIndex];
  }



 filter(event:any){
    this.selectedSortOption=event;
    this.filteredBookList = this.booklist;
    this.filteredBookList.sort((a: any, b: any) => {
      return a[event] - b[event];
    });
    this.updatePagination();
 }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredBookList.length / this.itemsPerPage);
    this.currentPage = 1;
  }
  get paginatedBookList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredBookList.slice(startIndex, startIndex + this.itemsPerPage);
  }

    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
}
