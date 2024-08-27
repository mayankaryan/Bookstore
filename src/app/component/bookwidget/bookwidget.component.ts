import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-bookwidget',
  templateUrl: './bookwidget.component.html',
  styleUrls: ['./bookwidget.component.scss']
})
export class BookwidgetComponent {
  @Input() book:any;

}
