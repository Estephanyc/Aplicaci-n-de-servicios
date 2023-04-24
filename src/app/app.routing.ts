
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { EliminarFactComponent } from "./page/facturacion/eliminar-fact/eliminar-fact.component";
import { IngresarFactComponent } from "./page/facturacion/ingresar-fact/ingresar-fact.component";
import { Component } from '@angular/core';
import { MantencionComponent } from "./page/facturacion/mantencion/mantencion.component";
import { HistorialNotComponent } from "./page/notificaciones/historial-not/historial-not.component";
import { NotRecientesComponent } from "./page/notificaciones/not-recientes/not-recientes.component";
import { MensajeriaConfigComponent } from "./page/notificaciones/mensajeria-config/mensajeria-config.component";
import { NotSolicitudesComponent } from './page/notificaciones/not-solicitudes/not-solicitudes.component';
import { AddUserComponent } from './page/usuario/add-user/add-user.component';
import { EditUserComponent } from "./page/usuario/edit-user/edit-user.component";
import { DeleteUserComponent } from "./page/usuario/delete-user/delete-user.component";
import { TransferenciasComponent } from "./page/operaciones/transferencias/transferencias.component";
import { GestionCobroComponent } from "./page/operaciones/gestion-cobro/gestion-cobro.component";
import { MovimientosComponent } from "./page/operaciones/movimientos/movimientos.component";
import { OrdenPagoComponent } from "./page/operaciones/orden-pago/orden-pago.component";
import { HistorialVentaComponent } from "./page/historial/historial-venta/historial-venta.component";
import { HistorialClienteComponent } from "./page/historial/historial-cliente/historial-cliente.component";
import { HistorialModificacionesComponent } from "./page/historial/historial-modificaciones/historial-modificaciones.component";
import { ConfigFacturacionComponent } from './page/configuracion/config-facturacion/config-facturacion.component';


const appRoutes = [
  {path : 'home2', component : AppComponent},
  { path: "login", component: LoginComponent},
  { path: "home", component: MenuComponent, children:[
    { path: "facturacion/eliminarfact" , component:EliminarFactComponent},
    { path: "facturacion/ingresarfact", component:IngresarFactComponent},
    { path: "facturacion/mantecion-fact", component:MantencionComponent},
    { path: "usuario/agregarusuario", Component:AddUserComponent},
    { path: "usuario/editarusuario",  Component: EditUserComponent}, 
    { path: "usuario/eliminarusuario", Component:DeleteUserComponent},
    { path: "operaciones/transferencias", Component:TransferenciasComponent}, 
    { path: "operaciones/gestioncobro", Component:GestionCobroComponent}, 
    { path: "operaciones/movimientos", Component:MovimientosComponent},
    { path: "operaciones/ordenespago", Component:OrdenPagoComponent},
    { path: "historial/historialventas", Component: HistorialVentaComponent}, 
    { path: "historial/historialclientes", Component: HistorialClienteComponent},
    {path: "historial/historialmodificaciones", Component:HistorialModificacionesComponent},
    { path: "notificaciones/historial-not", component:HistorialNotComponent},
    { path: "notificaciones/notificacionesrecientes" , component:NotRecientesComponent},
    { path: "notificaciones/configuracion-not", Component: MensajeriaConfigComponent},
    { path: "notificaciones/notificacions-solicitudes", Component: NotSolicitudesComponent}, 
    { path: "configuracion/facturacion-config", Component:ConfigFacturacionComponent}


  ]},

];


export const routing = RouterModule.forRoot(appRoutes);

