import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private httpService: HttpService) {}

  login() {
    console.log(this.usuario);
    console.log(this.password);

    this.httpService
      .validateUser(this.usuario, this.password)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
