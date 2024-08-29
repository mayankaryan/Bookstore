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
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ4Nzg4NjEsImV4cCI6MTcyNDk2NTI2MX0.52YAsgTVJ-lSr4ruUb1_SGWo81ZcjdAhcuEbNEkDZrA";
    const myheaders = new HttpHeaders().set('x-access-token', accessToken);
    return this.httpService.GetApiAuthCall('bookstore_user/get_cart_items',true , {headers: myheaders});
  }

  getCartItemCount ( count : number) {
    this.cartCount.next(count);
  }

}
