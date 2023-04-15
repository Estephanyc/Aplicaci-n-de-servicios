
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { EliminarFactComponent } from "./page/facturacion/eliminar-fact/eliminar-fact.component";
import { IngresarFactComponent } from "./page/facturacion/ingresar-fact/ingresar-fact.component";


const appRoutes = [
  {path : 'home2', component : AppComponent},
  { path: "login", component: LoginComponent},
  { path: "home", component: MenuComponent, children:[
    { path: "facturacion/eliminarfact" , component:EliminarFactComponent},
    { path: "facturacion/ingresarfact", component:IngresarFactComponent}
    
  ]}, 
  
];


export const routing = RouterModule.forRoot(appRoutes);

