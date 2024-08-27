import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartItems: any;

  constructor( private httpService: HttpService) {}

  ngOnInit(): void {
    
    this.cartItems = this.httpService.getMyCartItems();
    console.log(this.cartItems)
  }
  getMyCartItems() {
  }
}
