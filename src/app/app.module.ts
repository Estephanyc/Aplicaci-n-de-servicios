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
import { AddUserComponent } from './pages/usuario/add-user/add-user.component';
import { EditUserComponent } from './page/usuario/edit-user/edit-user.component';
import { DeleteUserComponent } from './page/usuario/delete-user/delete-user.component';
import { TransferenciasComponent } from './page/operaciones/transferencias/transferencias.component';
import { GestionCobroComponent } from './page/operaciones/gestion-cobro/gestion-cobro.component';
import { MovimientsoComponent } from './page/operaciones/movimientso/movimientso.component';
import { OrdenPagoComponent } from './page/operaciones/orden-pago/orden-pago.component';
import { MovimientosComponent } from './page/operaciones/movimientos/movimientos.component';
import { HistorialVentaComponent } from './page/historial/historial-venta/historial-venta.component';
import { HistorialClienteComponent } from './page/historial/historial-cliente/historial-cliente.component';
import { HistorialModificacionesComponent } from './page/historial/historial-modificaciones/historial-modificaciones.component';
import { NotRecientesComponent } from './page/notificaciones/not-recientes/not-recientes.component';
import { NotSolicitudesComponent } from './page/notificaciones/not-solicitudes/not-solicitudes.component';
import { HistorialNotComponent } from './page/notificaciones/historial-not/historial-not.component';
import { MensajeriaConfigComponent } from './page/notificaciones/mensajeria-config/mensajeria-config.component';
import { ConfigFacturacionComponent } from './page/configuracion/config-facturacion/config-facturacion.component';
import { ConfigClienteComponent } from './page/configuracion/config-cliente/config-cliente.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuComponent, MantencionComponent, IngresarFactComponent, EliminarFactComponent, AComponent, AddUserComponent, EditUserComponent, DeleteUserComponent, TransferenciasComponent, GestionCobroComponent, MovimientsoComponent, OrdenPagoComponent, MovimientosComponent, HistorialVentaComponent, HistorialClienteComponent, HistorialModificacionesComponent, NotRecientesComponent, NotSolicitudesComponent, HistorialNotComponent, MensajeriaConfigComponent, ConfigFacturacionComponent, ConfigClienteComponent],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
