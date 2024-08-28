import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private httpService: HttpService) { }

  getMyCartItems():any {
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ3NDQzMzMsImV4cCI6MTcyNDgzMDczM30.IRUX3siidMP771HWoDiho4nKlX_mLdT4WtoV4P95zTM";
    // const headers = new HttpHeaders({'Authorization': `${accessToken}`});
    // return this.httpService.GetApiAuthCall('bookstore_user/get_cart_items' , headers );
  }
}
