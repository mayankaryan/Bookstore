import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  getMyCartItems() {
    return this.httpClient.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items/access-token?eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ2NzkyNTUsImV4cCI6MTcyNDc2NTY1NX0.MT-pzywGpYZa6i5XhjiefQM4LgSakLUsYHR_trOjCfw').subscribe({
      next: (res:any) => {
        return res;
      }
    })
  }
}
