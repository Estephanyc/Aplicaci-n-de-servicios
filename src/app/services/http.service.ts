import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  configUrl = 'http://localhost:3000';

  validateUser(usuario: string, password: string) {
    const body = {
      usuario,
      password,
    };

    const url = this.configUrl + '/validateUser';
    return this.http.post(url, body);
  }

  getApp() {
    const idApp = 'APP001';
    const body = {
      idApp,
    };
    const url = this.configUrl + '/getApp';
    return this.http.post(url, body);
  }

  registrarAuditoria(infoAuditoria: any) {
    const url = this.configUrl + '/registrarAuditoria';
    return this.http.post(url, infoAuditoria);
  }
}
