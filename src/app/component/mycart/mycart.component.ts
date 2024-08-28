import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpService } from 'src/app/service/http/http.service';


@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartItems: any;
  cartLen: number = 0;
  user: any = {};
  address: any = {};
  custAddress: any;
  bookCount: number = 0;
  // Address: any = [
  //   {
  //     "type": "Work",
  //     "address": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, necessitatibus!elit",
  //     "region": "koramangala",
  //     "state": "Karnataka"
  //   },
  //   {
  //     "type": "Home",
  //     "address": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, necessitatibus!elit",
  //     "region": "koramangala",
  //     "state": "Karnataka"
  //   },
  //   {
  //     "type": "Other",
  //     "address": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, necessitatibus!elit",
  //     "region": "koramangala",
  //     "state": "Karnataka"
  //   }
  // ];

  constructor( private cartServices: CartService ) {
  
    
  }

  ngOnInit(): void {
    this.cartServices.getMyCartItem().subscribe({
      next: (res: any) => {
        console.log(res.result);
        this.cartItems = res.result;
        
        this.cartLen = res.result.length;
        this.cartServices.getCartItemCount(this.cartLen);

        this.user = res.result[0].user_id;
        console.log("user",this.user.fullName);
        this.address = res.result[0].user_id.address;
        console.log(this.address);
     
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    
  
  }

  increment() {
    this.bookCount = this.bookCount + 1;
  }
  decrement () { 
    if( this.bookCount > 0)
      this.bookCount = this.bookCount - 1;
  }
  getMyCartItems() {
  }
}
