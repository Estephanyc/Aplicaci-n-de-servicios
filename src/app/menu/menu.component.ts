import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.getModules();
  }

  getModules() {
    const infoApp = {
      id_app: 'APP001',
    };

    this.httpService.getModules(infoApp).subscribe((response: any) => {
      console.log(response);
    });
  }
}
