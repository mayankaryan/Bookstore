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
    const accessToken = localStorage.getItem('access-token');
    const myheaders = new HttpHeaders().set('x-access-token', (accessToken) ? accessToken : "");
    return this.httpService.GetApiAuthCall('bookstore_user/get_cart_items',true , {headers: myheaders});
  }

  getCartItemCount ( count : number) {
    this.cartCount.next(count);
  }

}
