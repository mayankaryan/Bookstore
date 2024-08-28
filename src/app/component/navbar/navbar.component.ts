import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchText:string='';

  ngOnInit(){}
  constructor(private dataservice:DataService){}
  Search(){
    console.log(this.searchText);
    this.dataservice.changeMessage(this.searchText);
  }

}
