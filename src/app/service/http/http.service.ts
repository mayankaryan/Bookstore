import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl:string="https://bookstore.incubation.bridgelabz.com/";
  constructor(private httpClient: HttpClient) { }


<<<<<<< HEAD
  GetApiAuthCall(url:string,token:boolean, headers: any) {
    console.log("url",this.BaseUrl + url);
    return this.httpClient.get( this.BaseUrl + url, token&&headers)
  }
=======
>>>>>>> c67f1cebc4f9fb295dfc3a68add86ea82bd00476
 
 GetApiCall(url:string){
  console.log(this.BaseUrl+url);
  return this.httpClient.get(this.BaseUrl+url);

 }
}
