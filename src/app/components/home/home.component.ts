import { Component, OnInit } from '@angular/core';
import {user} from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opt: number;
  users: user[];
  u: user = {} as user;
  selectedTab: number;

  constructor() {
    this.selectedTab = 0;
  }

  ngOnInit()  {

  }

  showClienti() {
    this.selectedTab = 0;
  }

  showProdotti() {
    this.selectedTab = 1;
  }
}
