import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpservice:HttpService) { }
  url='bookstore_user/get/feedback/';
  access_token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ5MTY2MTIsImV4cCI6MTcyNTAwMzAxMn0.mgMuJ11prm-fuKrUB37UNf2PgaHhpGBJ43V1oizC0VU';
  getFeedBack(id:any){
    console.log("id from service",id);
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.httpservice.GetApiAuthCall(this.url+id,true,{headers:myHeaders});
    }

  addtoWishlist(bookid:any){
    console.log("bookid from service",bookid);
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.httpservice.PostApiAuthCall('bookstore_user/add_wish_list/'+bookid,{},true,{headers:myHeaders});
  }

  addtoCart(bookid:any){
    console.log("bookid from service",bookid);
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.httpservice.PostApiAuthCall('bookstore_user/add_cart_item/'+bookid,{},true,{headers:myHeaders});
  }

  addfeedback(bookid:any,data:any){
    const myheaders = new Headers();
    myheaders.append('x-access-token',`${this.access_token}`);
    return this.httpservice.PostApiAuthCall('bookstore_user/add/feedback/'+bookid,data,true,{headers:myheaders});
  }

}
