import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { WishlistService } from '../../service/wishlist.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orderlist:any[]=[];
  isLoading:boolean=true;
  
  constructor(private loginservices:LoginService,private wishlistservice:WishlistService) { }

  ngOnInit() {
    this.loginservices.postLoginadmin({"email": "admin@test.com",
  "password": "test@123"}).subscribe({
      next:(res:any)=>{
        console.log(res);
        localStorage.setItem('admin-token',res.result.accessToken);
      },error:(err:any)=>{
        console.log(err);
      }
    });
    setTimeout(()=>{
      this.fetchOrder();
    },)

  }

  fetchOrder(){
    setTimeout(()=>{
      this.wishlistservice.getorderslist().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.isLoading=false;
          this.orderlist=res.result.splice(0,50);
          this.isLoading=false;
  
        },error:(err:any)=>{
          console.log(err);
        }
      });
     
      
     },2000);
  }

}