import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DatatransferService } from '../../service/datatransfer.service';

@Component({
  selector: 'app-bookwidget',
  templateUrl: './bookwidget.component.html',
  styleUrls: ['./bookwidget.component.scss']
})
export class BookwidgetComponent {
  @Input() book:any;

  constructor(private datatransferservice:DatatransferService) { }

  datatransfer(book:any){
    this.datatransferservice.datatransfer(book);
  }

}
