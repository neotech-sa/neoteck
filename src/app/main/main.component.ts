import { Component, OnInit } from '@angular/core';
import { content } from '../shared/content';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  banner = content.banner;
  services = content.services;
  constructor() {}

  ngOnInit() {}
}
