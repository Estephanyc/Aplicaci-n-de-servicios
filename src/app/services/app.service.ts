import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public app: any;
  public user: any;

  constructor(private httpService: HttpService) {}

  getApp() {
    this.httpService.getApp().subscribe((response: any) => {
      if (response.data.status) {
        this.app = response.data.data;
      } else {
      }
    });
  }

  setUser(data: any) {
    this.user = data;
    console.log('user', this.user);
  }
}
