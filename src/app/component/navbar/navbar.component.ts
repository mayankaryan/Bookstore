import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CartService } from 'src/app/service/cart.service';
import { error } from 'winston';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchText: string = '';
  cartItemCount: number = 0;

  


  constructor(private dataservice: DataService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe({
      next: (res: any) => {
        this.cartItemCount = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  } 
  Search() {
    console.log(this.searchText);
    this.dataservice.changeMessage(this.searchText);
  }

}
