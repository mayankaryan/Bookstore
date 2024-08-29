import { Component, OnInit} from '@angular/core';
import { DataService } from '../../service/data.service';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchText: string = '';
  cartItemCount: number = 0;

  constructor(private dataservice: DataService, private cartService: CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe({
      next: (res: any) => {
        this.cartItemCount = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    if(localStorage.getItem("access-token")){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }

  } 
  Search() {
    console.log(this.searchText);
    this.dataservice.changeMessage(this.searchText);
  }

  isLoggedIn=false; 
  showdialog=false;

  openWishlist(){
    this.router.navigate(['/wishlist']);
    this.showdialog=false;
  }

  openOrders(){
    this.router.navigate(['/order']);
    this.showdialog=false;
  }
  openProfile(){
    this.router.navigate(['/profile']);
    this.showdialog=false;
  }

  toggle(){
    this.showdialog=!this.showdialog;
  }

  logout(){
    localStorage.removeItem("access-token");
    this.router.navigate(['/'])
  }

  openNoWishlist(){
    this.router.navigate(['/wishlist-login']);
    this.showdialog=false;
  }

  openloginsignup(){
    this.router.navigate(['/login-signup']);
    this.showdialog=false;
  }



}

