import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }

  register = (url: any, data: any) => {
    return this.httpservice.postApiCall(url, data, false, null);
  }

}
