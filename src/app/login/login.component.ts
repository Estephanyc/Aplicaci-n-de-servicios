import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { EncrDecrServiceService } from '../services/encr-decr-service.service';
import { empty } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  usuarioinvalido = false;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private encrDecrServiceService: EncrDecrServiceService
  ) {}

  login() {

    console.log(this.usuario);
    console.log(this.password);

    if (this.usuario.trim() === '' || this.password.trim() === '') {
      console.log('Por favor, ingrese un usuario y contraseña válidos.');
      return;
    }

    const encryptedPassword = this.encrDecrServiceService.encrypt(
      this.password
    );

    console.log('encrypted pass', encryptedPassword);

    this.httpService
      .validateUser(this.usuario, encryptedPassword)
      .subscribe((response: any) => {
        console.log(response);
        if (response.data.status) {
          registrarAuditoria(response.data.user.id_usuario, 'AUD004', 'M001', 'Inicio de sesión exitoso.');
          this.router.navigate(['/home']);
        } else {
          this.usuarioinvalido = true;
        }
      });

  }

}


function registrarAuditoria(id_usuario: any, arg1: string, arg2: string, arg3: string) {
  throw new Error('Function not implemented.');
}

