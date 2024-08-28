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
  custAddress: any;
  bookCount: number = 0;

  constructor( private cartServices: CartService) {}

  ngOnInit(): void {
    this.cartServices.getMyCartItems().subscribe({
      next: (res:any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
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
