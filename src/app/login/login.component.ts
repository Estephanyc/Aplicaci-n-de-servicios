import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string = "";
  passwordipt: string = "";

  constructor() {}

  login() {
    console.log(this.usuario);
    console.log(this.passwordipt);
  }

}
