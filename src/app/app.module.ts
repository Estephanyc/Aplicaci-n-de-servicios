import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MantencionComponent } from './page/facturacion/mantencion/mantencion.component';
import { IngresarFactComponent } from './page/facturacion/ingresar-fact/ingresar-fact.component';
import { EliminarFactComponent } from './page/facturacion/eliminar-fact/eliminar-fact.component';
import { AComponent } from './page/parametros/a/a.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuComponent, MantencionComponent, IngresarFactComponent, EliminarFactComponent, AComponent],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
