import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '';

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.appService.getApp();
  }
}
