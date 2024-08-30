import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpService : HttpService ) { }

  postLogin(data: any) {
    return this.httpService.PostApiCall('bookstore_user/login',data);
  }
  postLoginadmin(data:any){
    return this.httpService.PostApiCall('bookstore_user/admin/login',data);
  }
}
