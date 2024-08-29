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
  
  
  constructor( private httpService: HttpService) {
    
  }
  
  getMyCartItem () {
    let accessToken = localStorage.getItem('access-token');
    const myheaders = new HttpHeaders().set('x-access-token', (accessToken) ? accessToken : "");
    return this.httpService.GetApiAuthCall('bookstore_user/get_cart_items',true , {headers: myheaders});
  }
  
  getCartItemCount ( count : number) {
    this.cartCount.next(count);
  }
  
  putBookCount (id: any, data: any) { 
    const accessToken = localStorage.getItem('access-token');
    console.log('cart-', data);
    const myheaders = new HttpHeaders().set('x-access-token', (accessToken) ? accessToken : "");
    return this.httpService.PutApiCall('bookstore_user/cart_item_quantity/',id, data, true, { headers: myheaders});
  }
}
