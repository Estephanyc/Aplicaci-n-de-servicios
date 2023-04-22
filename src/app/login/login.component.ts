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

  usuarioInvalido = false;
  usuarioNoActivo = false;
  usuarioBloqueado = false;
  contrasenaInvalida = false;

  userObject: User = {};

  title: string = '';

  constructor(
    private httpService: HttpService,
    private router: Router,
    private encrDecrServiceService: EncrDecrServiceService,
    public appService: AppService
  ) {}

  login() {
    if (this.usuario.trim() === '' || this.password.trim() === '') {
      this.usuarioInvalido = true;
      return;
    }

    const encryptedPassword = this.encrDecrServiceService.encrypt(
      this.password
    );

    this.httpService
      .validateUser(this.usuario, encryptedPassword)
      .subscribe((response: any) => {
        if (response.data.status) {
          this.userObject = response.data.data;
          this.registrarAuditoria();
        } else {
          if (response.data.code === 401) {
            this.usuarioNoActivo = true;
          } else if (response.data.code === 404) {
            this.usuarioInvalido = true;
          } else if (response.data.code === 403) {
            this.contrasenaInvalida = true;
          } else if (response.data.code === 405) {
            this.usuarioBloqueado = true;
          }
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
