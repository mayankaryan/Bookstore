import { Component } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishList: any[] = [];
  wishlistLen : number = 0;

  constructor ( private wishlistService: WishlistService ) {

    this.wishlistService.getServiceWishList().subscribe({
      next: (res: any) => {
        this.wishList = res.result.filter((item:any) => {
          if( item.product_id != null ) {
            return item;
          }
        });
        this.wishlistLen = this.wishList.length;
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
