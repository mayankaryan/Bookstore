import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  custAddress: number = -1;

  addressDetails: boolean = false;
  summaryContent: boolean = false;

  constructor(private cartServices: CartService, private router: Router) { }

  ngOnInit(): void {

    this.cartServices.getMyCartItem().subscribe({             // getting cart items from cart service 
      next: (res: any) => {
        this.cartItems = res.result;
        console.log('cartItem', res.result);
        this.cartLen = res.result.length; 

        if( res.result.length) {
          this.user = res.result[0].user_id;
          this.address = res.result[0].user_id.address;
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  increment(index: number) {                                                             // function to increase book count
    console.log(this.cartItems[index]);
    this.cartItems[index].quantityToBuy = this.cartItems[index].quantityToBuy + 1;      // logic: count = count + 1
    this.cartServices.putBookCount( this.cartItems[index]._id, {   "quantityToBuy": this.cartItems[index].quantityToBuy  } ).subscribe ({
      next: (res: any) => {
        console.log('increment', res);
      }
    });
  }
  decrement(index: number) {                                                            // fuction to decrease book count
    if (this.cartItems[index].quantityToBuy > 0) {
      this.cartItems[index].quantityToBuy = this.cartItems[index].quantityToBuy - 1;    // logic: count = count -1

      this.cartServices.putBookCount( this.cartItems[index]._id, {   "quantityToBuy": this.cartItems[index].quantityToBuy  } ).subscribe ({
        next: (res: any) => {
          console.log('increment', res);
        }
      });
    }
  }

  removeBook (index: number) {
    this.cartServices.deleteBook(this.cartItems[index]._id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigate(['/mycart']);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  

  onPlaceOrder() {
    this.addressDetails = !this.addressDetails
  }
  onContinue () {
    if( this.custAddress != -1 ) {
      this.summaryContent = !this.summaryContent;
    }
  }
}
