import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BasrUrl:string="https://bookstore.incubation.bridgelabz.com/";
  constructor(private http:HttpClient) { }
 
 GetApiCall(url:string){
  console.log(this.BasrUrl+url);
  return this.http.get(this.BasrUrl+url);

 }
}
