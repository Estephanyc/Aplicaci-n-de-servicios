import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { EncrDecrServiceService } from '../services/encr-decr-service.service';
import { AppService } from '../services/app.service';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  usuarioinvalido = false;

  userObject: User = {};

  title: string = '';

  constructor(
    private httpService: HttpService,
    private router: Router,
    private encrDecrServiceService: EncrDecrServiceService,
    public appService: AppService
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
          this.userObject = response.data.data;
          this.registrarAuditoria();
        } else {
          this.usuarioinvalido = true;
        }
      });
  }

  registrarAuditoria() {
    const infoAuditoria = {
      id_usuario: this.userObject.id_usuario,
      modulo: 'M001',
      tipo_auditoria: 'AUD001',
      mensaje: 'Inicio de sesión exitoso.',
    };

    this.httpService
      .registrarAuditoria(infoAuditoria)
      .subscribe((response: any) => {
        this.router.navigate(['/home']);
      });
  }
}
