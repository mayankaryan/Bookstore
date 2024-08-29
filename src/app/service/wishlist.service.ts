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
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ5MDc1NDMsImV4cCI6MTcyNDk5Mzk0M30.IkwRyC6takQBkCzdQ9vmX8DR73o9H2yHzXicP0lWyvE";
    const myHeaders = new HttpHeaders().set('x-access-token', accessToken);
    return this.httpService.GetApiAuthCall('bookstore_user/get_wishlist_items', true, {headers: myHeaders})
  }
}
