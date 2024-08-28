import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpservice:HttpService) { }
  url='bookstore_user/get/feedback/';
  access_token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ4Mjk2MjEsImV4cCI6MTcyNDkxNjAyMX0.VAaLQC_LcBnhIkIQg5-OWSpgNUjlNRZBVwl-r0OZ9K8';
  getFeedBack(id:any){
    console.log("id from service",id);
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.httpservice.GetApiAuthCall(this.url+id,true,{headers:myHeaders});
    }

}
