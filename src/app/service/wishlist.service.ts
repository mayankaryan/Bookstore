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
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ5MTM5MDUsImV4cCI6MTcyNTAwMDMwNX0.z0piVo5pww8R35LPoPo6NXM-K7GJXG4Y6Tx5x45tL2I";
    const myHeaders = new HttpHeaders().set('x-access-token', accessToken);
    return this.httpService.GetApiAuthCall('bookstore_user/get_wishlist_items', true, {headers: myHeaders})
  }
}
