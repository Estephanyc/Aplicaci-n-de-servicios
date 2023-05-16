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
  moduloLogin = 'M008';

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
        this.appService.setUser(response.data.data);

        if (response.data.status) {
          this.userObject = response.data.data;

          const tipoAuditoria = 'AUD001';
          const mensaje = 'Inicio de sesión exitoso.';
          this.appService.registrarAuditoria(
            tipoAuditoria,
            mensaje,
            this.moduloLogin
          );

          this.router.navigate(['/home']);
        } else {
          if (response.data.code === 401) {
            this.usuarioBloqueado = true;

            const tipoAuditoria = 'AUD002';
            const mensaje = 'Usuario bloqueado intentando iniciar sesión';
            this.appService.registrarAuditoria(
              tipoAuditoria,
              mensaje,
              this.moduloLogin
            );
          } else if (response.data.code === 404) {
            this.usuarioInvalido = true;
          } else if (response.data.code === 403) {
            this.contrasenaInvalida = true;

            const tipoAuditoria = 'AUD003';
            const mensaje = 'Usuario iniciando sesión con clave incorrecta';
            this.appService.registrarAuditoria(
              tipoAuditoria,
              mensaje,
              this.moduloLogin
            );
          } else if (response.data.code === 405) {
            this.usuarioBloqueado = true;

            const tipoAuditoria = 'AUD002';
            const mensaje = 'Usuario bloqueado intentando iniciar sesión';
            this.appService.registrarAuditoria(
              tipoAuditoria,
              mensaje,
              this.moduloLogin
            );
          }
        }
      });
  }
}
