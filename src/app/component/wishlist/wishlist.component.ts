import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishList: any[] = [];
  wishlistLen : number = 0;

  constructor ( private wishlistService: WishlistService, private router: Router ) {

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
        this.router.navigate(['/wishlist-login']);
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
