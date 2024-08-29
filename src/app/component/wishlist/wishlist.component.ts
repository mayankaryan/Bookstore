import { Component } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishList: any = {};
  
  constructor ( private wishlistService: WishlistService ) {

    this.wishlistService.getServiceWishList().subscribe({
      next: (res: any) => {
        console.log(res);
        this.wishList = res.result;
        console.log('wishlist', this.wishList);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
   }

  getWishList() {
    this.wishlistService.getServiceWishList().subscribe({
      next: (res: any) => {
        console.log(res.result);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}
