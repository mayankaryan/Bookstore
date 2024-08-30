import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  private subject = new BehaviorSubject<any>('');
  currentMessage = this.subject.asObservable();
  constructor() { }
  datatransfer(data:any){
    this.subject.next(data);
  }
}
