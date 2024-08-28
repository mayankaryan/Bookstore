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
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ4Mzg5MzMsImV4cCI6MTcyNDkyNTMzM30.lCVDSZYeU-0cvzaocEnFTLvVDRbUfMxHc2fY8Qk47Z0";
    const myheaders = new HttpHeaders().set('x-access-token', accessToken);
    return this.httpService.GetApiAuthCall('bookstore_user/get_cart_items',true , {headers: myheaders});
  }

  getCartItemCount ( count : number) {
    this.cartCount.next(count);
  }

}
