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

  getorderslist(){
    const accesstoken=localStorage.getItem('admin-token');
    const myheaders=new HttpHeaders().set('x-access-token',accesstoken?accesstoken:'');
    return this.httpService.GetApiAuthCall('/bookstore_user/admin/get/order',true,{headers:myheaders});
  }

  deleteBook(id: any) {
    const accesstoken=localStorage.getItem('admin-token');
    const myheaders=new HttpHeaders().set('x-access-token',accesstoken?accesstoken:'');
    return this.httpService.DeleteApiAuthCall('bookstore_user/remove_wishlist_item/',id,true,{headers:myheaders});
    // const accessToken = localStorage.getItem('access-token');
    // const myheaders = new HttpHeaders().set('x-access-token', (accessToken) ? accessToken : "");
    // return this.httpService.DeleteApiAuthCall('bookstore_user/remove_cart_item/',id,true, {headers: myheaders});
  }
}
