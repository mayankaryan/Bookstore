import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl:string="https://bookstore.incubation.bridgelabz.com/";
  constructor(private httpClient: HttpClient) { }

  GetApiAuthCall(url:string,token:boolean, headers: any) {
    console.log("url",this.BaseUrl + url);
    return this.httpClient.get( this.BaseUrl + url, token&&headers)
  }
 
 GetApiCall(url:string){
  console.log(this.BaseUrl+url);
  return this.httpClient.get(this.BaseUrl+url);
 }

postApiCall(url:any,data:any,token:boolean,headers:any){
  return this.httpClient.post(this.BaseUrl+url,data,token&&headers);
}

 PostApiAuthCall(url:string,data:any,token:boolean,headers:any){
  console.log("url",this.BaseUrl + url);
  return this.httpClient.post(this.BaseUrl + url,data,token&&headers);
 }
 PostApiCall (url: string, data: any) {
  return this.httpClient.post(this.BaseUrl+url, data);
 }

 PutApiAuthCall (url:string, id: any, data: any, token: boolean, headers: any) {
  return this.httpClient.put(this.BaseUrl + url + id, data, token&&headers);
 }

 DeleteApiAuthCall(url: string, id: any, token: boolean, headers: any) {
  return this.httpClient.delete(this.BaseUrl + url + id, token&&headers)
 }

}

