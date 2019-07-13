import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nav = [
    {
      name: 'Home',
      path: '#'
    },
    {
      name: 'Services',
      path: '#services'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
