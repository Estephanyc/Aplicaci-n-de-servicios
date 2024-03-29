import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EliminarFactComponent } from './page/facturacion/eliminar-fact/eliminar-fact.component';
import { IngresarFactComponent } from './page/facturacion/ingresar-fact/ingresar-fact.component';
import { Component } from '@angular/core';
import { MantencionComponent } from './page/facturacion/mantencion/mantencion.component';
import { HistorialNotComponent } from './page/notificaciones/historial-not/historial-not.component';
import { NotRecientesComponent } from './page/notificaciones/not-recientes/not-recientes.component';
import { MensajeriaConfigComponent } from './page/notificaciones/mensajeria-config/mensajeria-config.component';
import { NotSolicitudesComponent } from './page/notificaciones/not-solicitudes/not-solicitudes.component';
import { AddUserComponent } from './page/usuario/add-user/add-user.component';
import { EditUserComponent } from './page/usuario/edit-user/edit-user.component';
import { DeleteUserComponent } from './page/usuario/delete-user/delete-user.component';
import { TransferenciasComponent } from './page/operaciones/transferencias/transferencias.component';
import { GestionCobroComponent } from './page/operaciones/gestion-cobro/gestion-cobro.component';
import { MovimientosComponent } from './page/operaciones/movimientos/movimientos.component';
import { OrdenPagoComponent } from './page/operaciones/orden-pago/orden-pago.component';
import { HistorialVentaComponent } from './page/historial/historial-venta/historial-venta.component';
import { HistorialClienteComponent } from './page/historial/historial-cliente/historial-cliente.component';
import { HistorialModificacionesComponent } from './page/historial/historial-modificaciones/historial-modificaciones.component';
import { ConfigFacturacionComponent } from './page/configuracion/config-facturacion/config-facturacion.component';
import { MantenedorivaComponent } from './page/parametros/mantenedoriva/mantenedoriva.component';
import { MantenedortasaComponent } from './page/parametros/mantenedortasa/mantenedortasa.component';
import { MantenedorvaloresComponent } from './page/parametros/mantenedorvalores/mantenedorvalores.component';

const appRoutes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: MenuComponent,
    children: [
      { path: 'facturacion/eliminarfact', component: EliminarFactComponent },
      { path: 'facturacion/ingresarfact', component: IngresarFactComponent },
      { path: 'facturacion/mantecion-fact', component: MantencionComponent },
      { path: 'usuario/agregarusuario', component: AddUserComponent },
      { path: 'usuario/editarusuario', component: EditUserComponent },
      { path: 'usuario/eliminarusuario', component: DeleteUserComponent },
      {
        path: 'operaciones/transferencias',
        component: TransferenciasComponent,
      },
      { path: 'operaciones/gestioncobro', component: GestionCobroComponent },
      { path: 'operaciones/movimientos', component: MovimientosComponent },
      { path: 'operaciones/ordenespago', component: OrdenPagoComponent },
      { path: 'historial/historialventas', component: HistorialVentaComponent },
      {
        path: 'historial/historialclientes',
        component: HistorialClienteComponent,
      },
      {
        path: 'historial/historialmodificaciones',
        component: HistorialModificacionesComponent,
      },
      {
        path: 'notificaciones/historial-not',
        component: HistorialNotComponent,
      },
      {
        path: 'notificaciones/notificacionesrecientes',
        component: NotRecientesComponent,
      },
      {
        path: 'notificaciones/configuracion-not',
        component: MensajeriaConfigComponent,
      },
      {
        path: 'notificaciones/notificacions-solicitudes',
        component: NotSolicitudesComponent,
      },
      {
        path: 'configuracion/facturacion-config',
        component: ConfigFacturacionComponent,
      },
      { path: 'parametros/mantenedor-iva', component: MantenedorivaComponent },
      {
        path: 'parametros/mantenedor-tasa',
        component: MantenedortasaComponent,
      },
      {
        path: 'parametros/mantenedor-valores',
        component: MantenedorvaloresComponent,
      },
    ],
  },
];
export const routing = RouterModule.forRoot(appRoutes);
