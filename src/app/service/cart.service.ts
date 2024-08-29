import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartCount = new Subject<number>();
  cartCount$ = this.cartCount.asObservable();


  constructor( private httpService: HttpService) { }

  getMyCartItem () {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ5MDc1NDMsImV4cCI6MTcyNDk5Mzk0M30.IkwRyC6takQBkCzdQ9vmX8DR73o9H2yHzXicP0lWyvE";
    const myheaders = new HttpHeaders().set('x-access-token', accessToken);
    return this.httpService.GetApiAuthCall('bookstore_user/get_cart_items',true , {headers: myheaders});
  }

  getCartItemCount ( count : number) {
    this.cartCount.next(count);
  }

}
