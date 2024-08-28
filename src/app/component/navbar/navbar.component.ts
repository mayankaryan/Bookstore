import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchText:string='';

  ngOnInit(){}
  constructor(private dataservice:DataService,private router:Router){}
  Search(){
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

  logout=()=>{

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
