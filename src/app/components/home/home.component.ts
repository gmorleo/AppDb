import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opt: number;
  selectedTab: number;

  constructor() {
    this.selectedTab = 0;
  }

  ngOnInit()  {

  }

  showMySql() {
    this.selectedTab = 0;
  }

  showMongoDB() {
    this.selectedTab = 1;
  }
}
