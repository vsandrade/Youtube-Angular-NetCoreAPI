import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public titulo = 'Principal';

  constructor() { }

  ngOnInit() {
  }

}
