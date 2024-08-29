import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor( private httpService: HttpService ) { }

  getServiceWishList( ) {
    console.log('wishlist service')
    const accessToken = localStorage.getItem('access-token');
    const myHeaders = new HttpHeaders().set('x-access-token', (accessToken) ? accessToken : "" );
    return this.httpService.GetApiAuthCall('bookstore_user/get_wishlist_items', true, {headers: myHeaders})
  }
}
