import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  modules: any;

  constructor(
    private httpService: HttpService,
    public appService: AppService
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
}
