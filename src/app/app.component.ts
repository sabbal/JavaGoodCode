import { Component, OnInit } from '@angular/core';
import { DataLoader } from './data-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public dataLoader: DataLoader) {}

  ngOnInit() {}
}
