import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartItems: any;
  custAddress: any;

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
  getMyCartItems() {
  }
}
