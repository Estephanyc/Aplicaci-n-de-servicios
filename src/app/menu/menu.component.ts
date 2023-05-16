import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  modules: any;
  moduloLogin = 'M001';

  constructor(
    private httpService: HttpService,
    public appService: AppService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getModules();
  }

  getModules() {
    const infoApp = {
      id_app: this.appService.user.id_app,
      id_usuario: this.appService.user.id_usuario,
    };

    this.httpService.getModules(infoApp).subscribe((response: any) => {
      const result = response.data.data.reduce((acc: any, obj: any) => {
        if (!acc[obj.nombre_modulo]) acc[obj.nombre_modulo] = {};
        if (!acc[obj.nombre_modulo]['opciones'])
          acc[obj.nombre_modulo]['opciones'] = [];
        acc[obj.nombre_modulo]['opciones'].push(obj);
        acc[obj.nombre_modulo]['icono'] = obj.icono;

        return acc;
      }, {});
      this.modules = result;
      console.log(this.modules);
    });
  }

  getOpciones(key: any) {
    return this.modules[key].opciones;
  }

  getIcon(key: any) {
    return this.modules[key].icono;
  }

  goToOption(opcion: any) {
    const tipoAuditoria = 'AUD001';
    const mensaje =
      'Usuario ingresando a la opcion ' +
      opcion.nombre_opcion +
      ' del módulo ' +
      opcion.id_modulo;

    this.appService.registrarAuditoria(
      tipoAuditoria,
      mensaje,
      opcion.id_modulo
    );

    this.route.navigateByUrl('home/' + opcion.componente);
  }
}
