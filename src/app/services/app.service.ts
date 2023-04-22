import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public app: any;
  constructor(private httpService: HttpService) {}

  getApp() {
    this.httpService.getApp().subscribe((response: any) => {
      console.log(response);
      if (response.data.status) {
        this.app = response.data.data;
        console.log(response);
      } else {
      }
    });
  }
}
